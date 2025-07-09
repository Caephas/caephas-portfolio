import React from "react";

const ProjectDetailLoader = () => {
  return (
    <div className="animate-pulse space-y-6 px-4 md:px-8 py-10 max-w-4xl mx-auto">
      {/* Section Label */}
      <div className="h-4 w-32 bg-muted rounded-md mx-auto" />

      {/* Project Title */}
      <div className="h-10 w-2/3 bg-muted rounded-md mx-auto" />

      {/* Paragraph Lines */}
      <div className="space-y-3 max-w-2xl mx-auto mt-4">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/5"></div>
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
      </div>

      {/* Button Placeholders */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-36 bg-muted rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailLoader;
