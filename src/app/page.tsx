"use client";
import React from "react";

export default function Home() {
  return (
    <div className="p-6">
      {/* Container for columns */}
      <div className="flex flex-col md:flex-row items-center gap-8 min-h-[80vh]">
        
        {/* Left Column: Name & Intro */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-10">Arinze Obidiegwu</h1>

          <p className="max-w-lg text-lg leading-7">
            Hi, my name is Arinze Obidiegwu, but you can just call me Arinze. I am a 
            Software Engineer, Machine Learning Engineer, and Research Scientist who 
            specializes in Quantum Algorithms &amp; Machine Learning, a Technical Project 
            Manager, and a writer. I love exploring emerging technologies and finding ways 
            to push the boundaries of what’s possible.
          </p>
          
          <p className="max-w-lg text-lg leading-7 mt-6">
            I often share my thoughts on Software Engineering, Quantum Computing, Machine 
            Learning, and Life. I also enjoy breaking down complex topics using analogies into more 
            digestible content on my blog.
          </p>
          
          <ul className="list-none space-y-1 max-w-lg text-lg leading-7 mt-6">
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
        <div className="md:w-1/2 flex items-center justify-center">
          <img
          src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/IMG_3953.JPG"
            alt="Arinze"
            className="rounded-md object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}