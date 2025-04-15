'use client';
import { useEffect, useState } from 'react';
import LED from '@/components/LED';
import { DialogModal } from '@/components/DialogModal';
import Loading from '../loading';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface Project {
  id: string;
  name: string;
  description: string;
  demo: string;
  sourceCode: Url;
  mediumArticle?: Url;
}

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [projectId, setProjectId] = useState<string>("");

  // Fetch project data
  const fetchProject = async (projId: string) => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVSYIgAMzbp5zHy/projects/${projId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setProject(data.fields);
      setIsLoading(false);
      console.log(data.fields);
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  };

  // 1. Extract projectId in a client-side effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const idFromUrl = fullUrl.split('/').pop() || '';
      setProjectId(idFromUrl);
    }
  }, []);

  // 2. Once we have projectId, fetch project
  useEffect(() => {
    if (projectId) {
      fetchProject(projectId);
    }
  }, [projectId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-6">
          <h2 className="text-6xl">{project?.name}</h2>
          <div className="mt-9 max-w-[700px]">
            <p>{project?.description}</p>
            <div className="mt-6 flex gap-1 flex-wrap">
              {/* Demo */}
              {project?.demo && <DialogModal demoUrl={project.demo} />}
              {/* Source Code */}
              {project?.sourceCode && (
                <Link
                  href={project.sourceCode ?? ''}
                  target="_blank"
                  className="text-sm"
                >
                  <div className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md">
                    <p className="text-sm">View Code</p>
                    <LED delay={0} />
                  </div>
                </Link>
              )}
              {/* Medium Article */}
              {project?.mediumArticle && (
                <Link
                  href={project.mediumArticle}
                  target="_blank"
                  className="text-sm"
                >
                  <div className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md">
                    <p className="text-sm">View Article</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}