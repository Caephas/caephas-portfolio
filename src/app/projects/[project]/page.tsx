'use client';
import { useEffect, useState } from 'react';
import LED from '@/components/LED';
import { DialogModal } from '@/components/DialogModal';
import Loading from '../loading';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface project {
  id: string;
  name: string;
  description: string;
  demo: string;
  sourceCode: Url;
}
const page = () => {
  const [project, setProject] = useState<project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const url = window.location.href;
  const projectId = url.split('/').pop() || '';
  const fetchProject = async (projectId: string) => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appVSYIgAMzbp5zHy/projects/${projectId}`,
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
      return data;
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  };
  useEffect(() => {
    fetchProject(projectId);
  }, [projectId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-6">
          <h2 className="text-6xl">{project?.name}</h2>
          <div className="mt-9 max-w-[700px]">
            <p className="">{project?.description}</p>
            <div className="mt-6 flex gap-1">
              <DialogModal demoUrl={project?.demo ?? ''} />
              {project?.sourceCode && (
                <Link
                  href={project?.sourceCode ?? ''}
                  target="_blank"
                  className="text-sm">
                  <div className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md">
                    <p className="text-sm">View Code</p>
                    <LED delay={0} />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
