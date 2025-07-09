import React from "react";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Projects from "@/components/home/projects";
import Blogs from "@/components/home/blogs";
import Contact from "@/components/layouts/contact";

export default function Home() {
  return (
    <div className="px-6 pt-[70px] pb-6">
      {/* Hero section */}
      <Hero />

      {/* projects section */}
      <Projects />

      {/* skills section */}
      <Skills />

      {/* blogs */}
      <Blogs />
    </div>
  );
}
