import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="container flex flex-col py-20 px-6 gap-20">
      {/* header */}
      <header className="w-full flex flex-col justify-center items-center">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-primary w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-primary"></span>
          ABOUT
        </h5>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Get To Know Me
        </h3>
      </header>

      {/* main */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/IMG_1965.jpeg"
            alt="Arinze"
            className="rounded-md object-contain w-full h-auto"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full flex flex-col gap-3 md:w-1/2">
          <p className="leading-7">
            Hey 👋, I'm Arinze. I'm a Software Engineer with a growing passion
            for Machine Learning and Research. I love building efficient,
            scalable systems, but even more, I enjoy pushing the boundaries of
            what's possible through computation.
          </p>

          <p className="leading-7">
            Right now, I get to do both. At{" "}
            <Link
              href="https://bds.ul.ie/members.html"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              BDS group
            </Link>
            , I’m a Research Intern working on evolutionary computing,
            specifically Grammatical Evolution, to design quantum circuits. One
            of my breakthroughs? Evolving a circuit for Grover’s algorithm (3
            qubits) that outperformed the world standard. I’m now applying the
            same technique to other quantum algorithms.
          </p>

          <p>
            On the engineering side, I lead project development for{" "}
            <Link
              href="https://thesafetychic.com/about/"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              TheSafetyChic
            </Link>
            , building a child safety mobile app in Flutter. It’s a project that
            matters, and it’s fulfilling to guide it from idea to impact.
          </p>

          <p className="leading-7">
            I'm also someone who loves the intense creativity of hackathons. A
            highlight was leading the backend development for our "Star Student"
            project at{" "}
            <a
              href="https://www.linkedin.com/posts/arinze-obidiegwu-a71a78188_bgniehackathon2024-google-starstudent-activity-7252029587356876800-4ibL?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxL6vUBK_CMdMvr19o25M_Kt87opNXUOe4"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              Google BGN Ireland
            </a>
            , which landed us 2nd place by empowering teachers with custom
            safety stories. Another proud moment was winning the{" "}
            <a
              href="https://www.linkedin.com/posts/arinze-obidiegwu-a71a78188_hackathon-winningteam-aciworldwide-activity-7252747561495646208-aQ0z?utm_source=share&utm_medium=member_desktop&rcm=ACoAACxL6vUBK_CMdMvr19o25M_Kt87opNXUOe4"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              ACI Worldwide Hackathon
            </a>
            , where I focused on designing robust systems for finance challenges
            like currency transactions and fraud detection. It really tests your
            problem-solving skills under deadlines.
          </p>

          <p className="leading-7">
            I believe in sharing the journey, too. On my{" "}
            <a
              href="https://medium.com/@arinzeobidiegwu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              blog
            </a>
            , you'll find me trying to break down complex technical concepts
            (including some of that ML and Quantum Computing stuff!) using
            analogies into understandable formats. I sometimes just write random
            thoughts or life stuff that pops into my head.
          </p>

          <p className="leading-7">
            I'm particularly interested in building solutions that genuinely
            improve lives, particularly in child safety and education.
          </p>

          <p className="leading-7">
            And when I'm not immersed in tech? You might catch me playing video
            games, or, just as importantly, spending time mentoring aspiring
            developers and contributing where I can to help others grow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
