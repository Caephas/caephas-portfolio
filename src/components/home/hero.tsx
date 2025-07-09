"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
                  "Software Engineer.",
                  "Machine Learning Engineer.",
                  "Research Scientist.",
                  "Technical Project Manager.",
                  "Writer.",
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
          You can call me Arinze. I enjoy breaking down complex topics using
          analogies and sharing insights on software engineering, quantum
          computing, machine learning, and life. You’ll find many of my thoughts
          and writings on my blog — always curious, always learning.
        </p>

        <div className="flex items-center gap-3">
          <Button>View Portfolio</Button>
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
