import React from "react";
import Link from "next/link";
import Certification from "@/components/home/certification";

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
        <div className="w-full flex flex-col gap-4 md:w-1/2">
          <p className="leading-7">
            Hey 👋, I'm Arinze. I'm a Senior Software Developer passionate about bridging the gap between cutting-edge research and real-world industrial challenges. My work centers on using software, AI, and machine learning to build intelligent systems that solve complex problems—from smart manufacturing to quantum computing.
          </p>

          <p className="leading-7">
            Currently, as a Senior Software Developer at{" "}
            <a
              href="https://gis.ie/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              Gallarus Industry Solutions
            </a>
            , I'm at the forefront of the smart manufacturing revolution. I apply AI and ML to enhance industrial processes and contribute to the architecture of advanced Digital Twin and Unified Namespace (UNS) ecosystems, turning vast operational data into actionable intelligence.
          </p>

          <p className="leading-7">
  My passion for deep-tech was cemented during my research on evolutionary computing at the{" "}
  <Link
    href="https://bds.ul.ie/members.html"
    className="underline font-semibold text-blue-600 dark:text-blue-400"
  >
    BDS group
  </Link>
  , where I applied Grammatical Evolution to synthesise executable quantum circuits from scratch. A key breakthrough came when I evolved a 3-qubit Grover’s algorithm circuit that outperformed canonical implementations—achieving over 90% reductions in depth and gate count while improving fidelity on real IBM quantum hardware. It was a clear moment where I saw theory, experimentation, and innovation converge.
</p>
          
          <p className="leading-7">
            I also have a strong background in leading product development. For{" "}
            <Link
              href="https://thesafetychic.com/about/"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              TheSafetyChic
            </Link>
            , I guided the creation of a child safety mobile app in Flutter, taking it from a concept to a high-impact tool. This drive to compete and innovate under pressure has also led to wins at major hackathons, including those hosted by{" "}
            <a
              href="https://www.linkedin.com/posts/arinze-obidiegwu-a71a78188_bgniehackathon2024-google-starstudent-activity-7252029587356876800-4ibL?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              Google
            </a>
            {" "}and{" "}
            <a
              href="https://www.linkedin.com/posts/arinze-obidiegwu-a71a78188_hackathon-winningteam-aciworldwide-activity-7252747561495646208-aQ0z?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              ACI Worldwide
            </a>
            , where my teams tackled challenges in education and financial tech.
          </p>

          <p className="leading-7">
            I believe in sharing my journey and thoughts. On my{" "}
            <a
              href="https://medium.com/@arinzeobidiegwu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              blog
            </a>
            , I like to communicate my ideas on different things, and when I'm not immersed in tech, you can find me playing video games or mentoring aspiring developers.
          </p>
        </div>
      </section>

      <Certification />
    </div>
  );
};

export default page;