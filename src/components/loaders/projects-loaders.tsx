import React from "react";

const ProjectListLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-accent rounded-2xl p-6 shadow-md space-y-4"
        >
          <div className="h-4 w-1/3 bg-muted rounded-md"></div>
          <div className="h-6 w-2/3 bg-muted rounded-md"></div>
          <div className="h-4 w-full bg-muted rounded-md"></div>
          <div className="h-4 w-5/6 bg-muted rounded-md"></div>
          <div className="h-4 w-3/4 bg-muted rounded-md"></div>
          <div className="h-6 w-20 bg-muted rounded-full mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectListLoader;
