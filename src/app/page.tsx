"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

export default function Home() {
  return (
    <div className="px-6 pt-[100px]">
      {/* Container for columns */}
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 min-h-[80vh]">
        {/* Left Column: Name & Intro */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h4 className="text-3xl font-medium mb-10">Hello 👋</h4>
          <h1 className="text-6xl font-bold mb-2">I'm Arinze Obidiegwu,</h1>
          <h3 className="text-3xl font-medium text-primary mb-10">
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

          <p className="max-w-lg text-lg leading-7">
            You can call me Arinze. I enjoy breaking down complex topics using
            analogies and sharing insights on software engineering, quantum
            computing, machine learning, and life. You’ll find many of my
            thoughts and writings on my blog — always curious, always learning.
          </p>

          <ul className="list-none space-y-1 max-w-lg text-xl leading-7 mt-6">
            <li>
              <strong>Blog:</strong>{" "}
              <a
                href="https://medium.com/@arinzeobidiegwu"
                // className="underline"
                className="underline font-semibold text-blue-600 dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </li>
          </ul>
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
      </div>
    </div>
  );
}
