"use client";

import React, { useEffect, useState } from "react";
import ProjectListLoader from "@/components/loaders/projects-loaders";
import ProjectCard from "./project-card";

interface Project {
  fields: {
    name: string;
    description?: string;
    category?: string;
  };
  id?: string;
  createdTime?: string;
}

interface ProjectsListProps {
  displayAll?: boolean;
}

const ProjectsList = ({ displayAll = false }: ProjectsListProps) => {
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
          console.error("No records found:", data);
        }
        return data;
      } catch (error) {
        if (i < maxRetries) {
          console.log(`Retry ${i + 1} in ${retryDelay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        } else {
          console.error("Error fetching projects:", error);
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

  const visibleProjects = displayAll ? projects : projects.slice(0, 3);

  return (
    <section className="flex flex-col">
      {loading && (
        <div className="mt-12">
          <ProjectListLoader />
        </div>
      )}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {!loading &&
          visibleProjects.length > 0 &&
          visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.fields.name}
              link={`/projects/${project.id}`}
              exerpt={project.fields.description?.slice(0, 300)}
              category={project.fields.category}
            />
          ))}

        {!loading && visibleProjects.length < 1 && <p>No Projects Available</p>}
      </section>
    </section>
  );
};

export default ProjectsList;
