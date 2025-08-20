import { cn } from "@/lib/utils";
import { Brain, Atom, GitBranch, SquareCode, UserSearch } from "lucide-react";
import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "Software Engineering",
      icon: (
        <SquareCode
          size={70}
          color="#3c71dd"
          strokeWidth={3}
          absoluteStrokeWidth
        />
      ),
      text: "I build robust, scalable, and maintainable software systems, both on the frontend and backend. With a deep understanding of programming paradigms and design patterns, I develop clean, efficient code that powers real-world applications.",
      tools: [
        "Typescript",
        "Java",
        "C#",
        "Flutter",
        "Python",
        "Rust",
        "Docker",
        "Git",
      ],
    },
    {
      title: "Machine Learning",
      icon: (
        <Brain size={70} color="#3c71dd" strokeWidth={3} absoluteStrokeWidth />
      ),
      text: "I use data to teach machines how to learn and improve. From predictive modeling to natural language processing, I work with frameworks like TensorFlow and PyTorch to create intelligent systems that solve real problems.",
      tools: ["Panda", "OpenCV", "Tensor Flow", "PyTorch", "Python"],
    },
    {
      title: "Quantum Computing",
      icon: (
        <Atom size={70} color="#3c71dd" strokeWidth={3} absoluteStrokeWidth />
      ),
      text: "I explore the fascinating world of quantum mechanics to design algorithms that run on quantum hardware. My work involves quantum circuits, entanglement, and quantum logic, all aimed at solving computationally intensive problems.",
      tools: ["Python", "Qiskit"],
    },
    {
      title: "Evolutionary Algorithms",
      icon: (
        <GitBranch
          size={70}
          color="#3c71dd"
          strokeWidth={3}
          absoluteStrokeWidth
        />
      ),
      text: "Inspired by nature, I develop optimization algorithms that evolve over time, just like living organisms. These algorithms help tackle complex challenges in AI, robotics, and automated design systems.",
      tools: ["Genetic programming", "Genetic algorithm"],
    },
    {
      title: "Researcher",
      icon: (
        <UserSearch
          size={70}
          color="#3c71dd"
          strokeWidth={3}
          absoluteStrokeWidth
        />
      ),
      text: "I’m driven by curiosity and a love for experimentation. I conduct research that bridges theory and application, often at the intersection of AI, quantum computing, and algorithmic science.",
      tools: ["Overleaf", "Python", "Notion", "QML"],
    },
  ];

  return (
    <section className="container flex flex-col py-10 lg:py-16 gap-20">
      {/* header */}
      <header className="w-full flex flex-col justify-center items-center">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-primary w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-primary"></span> MY
          SKILLS
        </h5>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Technical Proficiencies
        </h3>
      </header>

      {/* skills cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
        {skills?.map((item, i) => {
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-4 justify-center bg-card text-card-foreground px-6 md:px-10 py-6 md:py-12 border-primary rounded-2xl shadow-md transition-transform duration-200 ease-in-out hover:scale-105",
                i % 2 === 0
                  ? "border-b-2 hover:border-t-2"
                  : "border-t-2 hover:border-b-2"
              )}
            >
              {item?.icon}
              <h6 className="text-xl md:text-3xl font-semibold">
                {item?.title}
              </h6>
              <p className="text-muted-foreground text-base flex gap-3">
                <span className="p-[2px] w-[3px] flex h-auto bg-muted-foreground"></span>{" "}
                {item?.text}
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {item?.tools?.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-accent border border-muted-foreground text-accent-foreground py-1 px-2 rounded-full text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
