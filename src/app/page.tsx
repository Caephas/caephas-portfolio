import React from "react";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <div className="px-6 pt-[70px] pb-6">
      {/* Hero section */}
      <Hero />

      {/* skills section */}
      <Skills />

      {/* projects section */}
      <Projects />
    </div>
  );
}
