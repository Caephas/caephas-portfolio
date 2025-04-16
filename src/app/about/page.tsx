import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="p-6">
      {/* Main Title */}
      <h2 className="text-6xl mb-8">About</h2>
      
      {/* Container for the side-by-side layout */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/IMG_1965.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYDWHTINI3OHYY4PO%2F20250416%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250416T103239Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDXQr9T%2FJT0KVP6HL2rwHbfwFbm3XITl9ZE6S7cOjgcbAIhAIrgvWYkJbOMy6BJdqGE2jBNQADXh5tew3m2wNHhvWhCKtoCCEQQABoMNTU3NjkwNjAyMzIxIgwBrerPwnNdNY3XT2YqtwLUh%2BLJ6y%2FQ%2Byx4iGSc%2BNSFGlbWw0Xq6fxyxcOytCqksdRSGK6vA%2BAkuPPk1D3w46rPChK%2BwQUyhXXxWPgf3yiigsnuBAVjW8lGtLriNvKxn8MpgrsBqTFlKjcNxp1vYQyILIVHFT3P9Z0vNcX1LDc8xulR8ooULuZ%2FABGI%2BYtibWKok1Julg%2FoZYj7kCf7%2B6wFG4awta2mUr6LNpheebD350R9ZYrE4ZqYP3qr0w9MhPBCmEbNquRH99zMrHW5gmKFdsmhsJJdXu2XcRz7h0fV527DNGF6VpVr2%2FY1G45DehwKI%2FjqU1eLNzzp08URelhqSE0aHMiBaiX5oexFmQdvoL%2Fit5wRgI6OHEfTxf%2B6XroN2oPVNhODhAmNHL4chZU3IK2yagVU99%2FsJdmsNW7AUHCixP9fhzDlzf2%2FBjqsAudv9n3D6maoHn%2FzgkvgWbrkew6gnXCmw3LujJ1qXMKrHBZngNgtzPEzCg9Rwoh66dD6jVnIrVQhjdbViEenhSHk%2BvXreKOXFjvOFVglnHfealuxTdHXzO4%2BKFqiKesd2KodrxfET0OelBUCKWoEunHfCXFxX9CRbU5C252fYRUx%2Bxk97yliWPSAXYhhoESAmlE%2BsWfztnKZuu0drd02bYidih%2BO1J0gwGriT1NsXX3lOTbgkGHtKK3T%2B5vE3zC9WDnLgckimmiT%2Bs2ZNIiU0DwDbTqrse6s7%2Fk%2FJH3Q9M5V7uOEwIi3Q%2B7QnTJCdgR9WuLOR0twIGAGXRRur9d3eE1gYu7mqolz%2Fku2sH1ZXG1CHnHvlrbFGgtWtmHUiNgGBqHL8lc%2Fae7CXLK%2BLQ%3D%3D&X-Amz-Signature=9ba8f24deb894c7f46650193363c8f9f4f88bd2edad0d22af3346a39e42b5af2&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            alt="Arinze"
            className="rounded-md object-contain w-full h-auto"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full md:w-1/2">
          <p className="mt-6 leading-7">
            Hey, I'm Arinze. While my roots are firmly planted in Software Engineering, 
            and I still love the challenge of building efficient, scalable systems, 
            I'm increasingly passionate about diving deeper into Machine Learning and Research.
          </p>

          <p className="mt-6 leading-7">
            My current journey actually lets me explore both sides. As a Research Intern 
            with{' '}
            <Link 
              href="https://bds.ul.ie/members.html" 
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              BDS group
            </Link>
            , I'm focused on using evolutionary computing, specifically Grammatical Evolution, to design quantum circuits. This approach has proven successful: I was able to evolve a circuit for Grover's algorithm on 3 qubits that surpassed the world standard. It's fascinating work, and I'm currently applying these techniques to other algorithms. Simultaneously, I'm putting my project management skills to work for{' '}
            <Link 
              href="https://thesafetychic.com/about/" 
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              TheSafetyChic
            </Link>{' '}
            in Nigeria, guiding the development of a crucial child safety mobile app using Flutter. It's fulfilling to lead a project that speeds up getting help into users' hands and truly connects with them.
          </p>

          <p className="mt-6 leading-7">
            I'm also someone who loves the intense creativity of hackathons. A highlight was 
            leading the backend development for our "Star Student" project at{' '}
            <a 
              href="https://www.linkedin.com/posts/arinze-obidiegwu-a71a78188_bgniehackathon2024-google-starstudent-activity-7252029587356876800-4ibL?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxL6vUBK_CMdMvr19o25M_Kt87opNXUOe4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              Google BGN Ireland
            </a>
            , which landed us 2nd place by empowering teachers with custom safety stories. Another proud moment was winning the{' '}
            <a 
              href="https://www.linkedin.com/posts/arinze-obidiegwu-a71a78188_hackathon-winningteam-aciworldwide-activity-7252747561495646208-aQ0z?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxL6vUBK_CMdMvr19o25M_Kt87opNXUOe4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              ACI Worldwide Hackathon
            </a>
            , where I focused on designing robust systems for finance challenges like currency transactions and fraud detection. It really tests your problem-solving skills under deadlines.
          </p>

          <p className="mt-6 leading-7">
            I believe in sharing the journey, too. On my{' '}
            <a 
              href="https://medium.com/@arinzeobidiegwu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              blog
            </a>
            , you'll find me trying to break down complex technical concepts (including some of that ML and Quantum Computing stuff!) using analogies into understandable formats. I sometimes just write random thoughts or life stuff that pops into my head.
          </p>

          <p className="mt-6 leading-7">
            I'm particularly interested in building solutions that genuinely improve lives, particularly in child safety and education.
          </p>

          <p className="mt-6 leading-7">
            And when I'm not immersed in tech? You might catch me playing video games, or, just as importantly, spending time mentoring aspiring developers and contributing where I can to help others grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;