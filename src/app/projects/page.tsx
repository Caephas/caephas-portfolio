'use client';
import { useState, useEffect } from 'react';
import ProjectCard2 from '@/components/ProjectCard2';

interface Project {
  fields: {
    name: string;
    description?: string;
    category?: string;
  };
  id?: string;
  createdTime?: string;
}

const page = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const config = {
    baseId: process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID,
    tableId: process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID,
    api_token: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
  };

  const fetchProjects = async () => {
    const maxRetries = 3;
    const retryDelay = 1000;

    for (let i = 0; i <= maxRetries; i++) {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${config.baseId}/${config.tableId}`,
          {
            headers: {
              Authorization: `Bearer ${config.api_token}`,
            },
          }
        );
        const data = await response.json();
        if (data.records) {
          setProjects(data.records);
        } else {
          console.error('No records found:', data);
        }
        return data;
      } catch (error) {
        if (i < maxRetries) {
          console.log(`Retry ${i + 1} in ${retryDelay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        } else {
          console.error('Error fetching projects:', error);
          return [];
        }
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-6xl">Projects</h2>
      {loading ? (
        <div className="mt-12">
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard2
                key={project.id}
                title={project.fields.name}
                link={`/projects/${project.id}`}
                exerpt={project.fields.description?.slice(0, 300)}
                category={project.fields.category}
              />
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
