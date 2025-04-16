'use client';
import { useEffect, useState } from 'react';
import LED from '@/components/LED';
import { DialogModal } from '@/components/DialogModal';
import Loading from '../loading';
import Link from 'next/link';
import ImageGalleryModal from '@/components/ImageGalleryModal';
import { Url } from 'next/dist/shared/lib/router/router';

interface Project {
  id: string;
  name: string;
  description: string;
  demo: string;
  sourceCode: Url;
  mediumArticle?: Url;
  images?: string; 
  appStoreLink?: string;   // New field for iOS App Store URL
  playStoreLink?: string;  // New field for Google Play Store URL
}

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [projectId, setProjectId] = useState<string>("");

  // Fetch project data from Airtable
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
      return data;
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  };

  // Extract projectId on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const idFromUrl = fullUrl.split('/').pop() || '';
      setProjectId(idFromUrl);
    }
  }, []);

  // Once we have projectId, fetch project data
  useEffect(() => {
    if (projectId) {
      fetchProject(projectId);
    }
  }, [projectId]);

  // Parse the comma-separated images string into an array
  const imageUrls = project?.images ? project.images.split(',').map(url => url.trim()) : [];

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
              {/* Demo button (renders the DialogModal) */}
              {project?.demo && <DialogModal demoUrl={project.demo} />}
              {/* Source Code button */}
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
              {/* Medium Article button */}
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
              {/* Images Gallery button */}
              {project?.images && imageUrls.length > 0 && (
                <ImageGalleryModal imageUrls={imageUrls} />
              )}
              {/* App Store Link button */}
              {project?.appStoreLink && (
                <Link
                  href={project.appStoreLink}
                  target="_blank"
                  className="text-sm"
                >
                  <div className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md">
                    <p className="text-sm">View on App Store</p>
                  </div>
                </Link>
              )}
              {/* Play Store Link button */}
              {project?.playStoreLink && (
                <Link
                  href={project.playStoreLink}
                  target="_blank"
                  className="text-sm"
                >
                  <div className="w-fit border border-gray-600 px-3 py-1 flex items-center gap-2 rounded-md">
                    <p className="text-sm">View on Play Store</p>
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