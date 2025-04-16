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
            src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/EPT18677.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYDWHTINI3OHYY4PO%2F20250416%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250416T103442Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDXQr9T%2FJT0KVP6HL2rwHbfwFbm3XITl9ZE6S7cOjgcbAIhAIrgvWYkJbOMy6BJdqGE2jBNQADXh5tew3m2wNHhvWhCKtoCCEQQABoMNTU3NjkwNjAyMzIxIgwBrerPwnNdNY3XT2YqtwLUh%2BLJ6y%2FQ%2Byx4iGSc%2BNSFGlbWw0Xq6fxyxcOytCqksdRSGK6vA%2BAkuPPk1D3w46rPChK%2BwQUyhXXxWPgf3yiigsnuBAVjW8lGtLriNvKxn8MpgrsBqTFlKjcNxp1vYQyILIVHFT3P9Z0vNcX1LDc8xulR8ooULuZ%2FABGI%2BYtibWKok1Julg%2FoZYj7kCf7%2B6wFG4awta2mUr6LNpheebD350R9ZYrE4ZqYP3qr0w9MhPBCmEbNquRH99zMrHW5gmKFdsmhsJJdXu2XcRz7h0fV527DNGF6VpVr2%2FY1G45DehwKI%2FjqU1eLNzzp08URelhqSE0aHMiBaiX5oexFmQdvoL%2Fit5wRgI6OHEfTxf%2B6XroN2oPVNhODhAmNHL4chZU3IK2yagVU99%2FsJdmsNW7AUHCixP9fhzDlzf2%2FBjqsAudv9n3D6maoHn%2FzgkvgWbrkew6gnXCmw3LujJ1qXMKrHBZngNgtzPEzCg9Rwoh66dD6jVnIrVQhjdbViEenhSHk%2BvXreKOXFjvOFVglnHfealuxTdHXzO4%2BKFqiKesd2KodrxfET0OelBUCKWoEunHfCXFxX9CRbU5C252fYRUx%2Bxk97yliWPSAXYhhoESAmlE%2BsWfztnKZuu0drd02bYidih%2BO1J0gwGriT1NsXX3lOTbgkGHtKK3T%2B5vE3zC9WDnLgckimmiT%2Bs2ZNIiU0DwDbTqrse6s7%2Fk%2FJH3Q9M5V7uOEwIi3Q%2B7QnTJCdgR9WuLOR0twIGAGXRRur9d3eE1gYu7mqolz%2Fku2sH1ZXG1CHnHvlrbFGgtWtmHUiNgGBqHL8lc%2Fae7CXLK%2BLQ%3D%3D&X-Amz-Signature=bc161e406196f21ff8f13a4252f87d7a089614f4c15decc40227b32cbd47db70&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            alt="Arinze"
            className="rounded-md object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}