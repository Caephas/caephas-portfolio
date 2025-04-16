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
          src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/EPT18677.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYDWHTINIXANO3K76%2F20250416%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250416T105041Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIQDVuFLVr%2B7OCcTC4mmMakxJbvlOOyaSg5mITbXY8PEmJQIgYSPSm6h2AsI3idRJVeaqMiE%2B3Dif4pBziyAW6RfBWCEq2gIIRBAAGgw1NTc2OTA2MDIzMjEiDFSIRagRU4glsmbzFSq3Ah%2BTh2BPqzhdd8q2eybJxYn3kfCSp5A2GxCaX0WLbQkN750uWlpp1Ti9NCJWpJ5k67wUCA%2BzyUl4D8G%2F%2BIQRyR1LQ095HT10MoCyIIQFw2Ex%2Bxkwy294DMF4t6kIQrT7nwfCLi7LlmmMq6hXklrb7UcaLb4U%2Fu5M8RbGjp0tS%2FDivT9HMHIlzgWNCtnfTBhq5k4ED0HfjEpJm8H2U6zuVhkJ0QM%2F0LkBUfq8Fb%2FwVuIXQs2R%2BHQNcFxoUDPlKS65wYD1v%2FxiUnbIblBkrkMh8fSydxPlwANdpB5z9s%2F86oC4J%2B8Ajzr2LxPxbP%2F6qd3gLObt10hJ%2FMIx7V%2FlIIzRh%2BGIJH7WgwFEapCMCrvyYLbtgxxTZNVry3ZwcquO52%2B9%2F%2BOKjlWMcEkdWZUaOrQG9XfLNOq8Kst2MOXN%2Fb8GOq0CzT2fKUsJ%2Fi58qmv7uPYAuo8N6xl9oqmPZ8FMah4P2V0HCa7OmPvJ%2BS180Mi8Gi5cRf%2FxjMQAiPE%2FjiZa87L2k73l6t1baMP0kcbcZTe6FQqWRiayLk%2Brx4r9i9lJPzHKXziif5BHI8kIyK192vnzqXFl42iL%2B%2BkXJ2V%2FC7nw70RiciiNz5OntQTAwfbQpfWyPvU3VFwl%2BNwY4w6KWXqbx7mjdb%2FBoJTiu5clKSHJeJ44GLtTQ0q%2Fw%2BIDvj0GC%2BsBRdUf0jpCiGZEN%2Baw%2FKaOfRXSy1yW8iygsUUEY07L%2BpnY21uua%2Bw1K6UylaqBwDMOLrpRwKfMXAokY%2BAPuQYZwvy70XXJwzPZe5W7y54Aa9mnDS9gSQwRhLCjuKtGFjGm3x%2BRxLr8bFaZWJcY7g%3D%3D&X-Amz-Signature=894ea405cdcd5e297210bfdf92d40e08717094a462cd530b66eb6a9ac4c900f3&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            alt="Arinze"
            className="rounded-md object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}