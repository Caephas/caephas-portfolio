"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { push } = useRouter();

  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[30vh]">
      {/* Left Column: Name & Intro */}
      <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
        <div>
          <h4 className="text-xl md:text-3xl font-medium mb-5 lg:mb-10">
            Hello 👋
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            I'm Arinze Obidiegwu,
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-primary">
            A{" "}
            <span className="text-primary">
              <Typewriter
                words={[
                  "Research Scientist.",
                  "Software Engineer.",
                  "Machine Learning Engineer.",
                  "Quantum Computing Enthusiast.",   
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              /> 
            </span>
          </h3>
        </div>

        <p className="max-w-lg text-base md:text-lg leading-7">
          You can call me Arinze. I'm driven by a single mission: to simplify and solve complex problems. 
          I apply a researcher's curiosity to the fields of Software Engineering, Machine Learning and Quantum Computing.
        </p>

        <div className="flex items-center gap-3">
          <Button onClick={() => push("/projects")}>View Projects</Button>
          <Button variant={"link"}>
            <Link
              href={"https://medium.com/@arinzeobidiegwu"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base lg:text-lg flex items-center gap-1"
            >
              Read Articles <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className="rounded-full relative">
        <Image
          src="/profile.png"
          alt=""
          width={900}
          height={900}
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
