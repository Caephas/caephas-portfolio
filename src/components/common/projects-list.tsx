"use client";
import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Project {
  fields: {
    name: string;
    description?: string;
    category?: string;
  };
  id?: string;
  createdTime?: string;
}

const ProjectsList = () => {
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

  console.log(projects);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
      {/* project card */}
      <div className="group flex flex-col gap-6 bg-accent px-6 py-10 border-primary rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex justify-between items-start relative overflow-visible">
          <h4 className="flex flex-col text-xl md:text-3xl">
            <span className="text-xs">PROJECT TITLE</span>Adventures of Muna
          </h4>
          <ExternalLink
            size={20}
            color="#3c71dd"
            className="transform -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            strokeWidth={3}
            absoluteStrokeWidth
          />
        </div>

        <p className="text-base text-accent-foreground">
          Inspired by nature, I develop optimization algorithms that evolve over
          time, just like living organisms. These algorithms help tackle complex
          challenges in AI, robotics, and automated design systems.
        </p>
      </div>
    </section>
  );
};

export default ProjectsList;
