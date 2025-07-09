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

      {/* Container for the side-by-side layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            // src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/EPT18677.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYDWHTINIXANO3K76%2F20250416%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20250416T105041Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJHMEUCIQDVuFLVr%2B7OCcTC4mmMakxJbvlOOyaSg5mITbXY8PEmJQIgYSPSm6h2AsI3idRJVeaqMiE%2B3Dif4pBziyAW6RfBWCEq2gIIRBAAGgw1NTc2OTA2MDIzMjEiDFSIRagRU4glsmbzFSq3Ah%2BTh2BPqzhdd8q2eybJxYn3kfCSp5A2GxCaX0WLbQkN750uWlpp1Ti9NCJWpJ5k67wUCA%2BzyUl4D8G%2F%2BIQRyR1LQ095HT10MoCyIIQFw2Ex%2Bxkwy294DMF4t6kIQrT7nwfCLi7LlmmMq6hXklrb7UcaLb4U%2Fu5M8RbGjp0tS%2FDivT9HMHIlzgWNCtnfTBhq5k4ED0HfjEpJm8H2U6zuVhkJ0QM%2F0LkBUfq8Fb%2FwVuIXQs2R%2BHQNcFxoUDPlKS65wYD1v%2FxiUnbIblBkrkMh8fSydxPlwANdpB5z9s%2F86oC4J%2B8Ajzr2LxPxbP%2F6qd3gLObt10hJ%2FMIx7V%2FlIIzRh%2BGIJH7WgwFEapCMCrvyYLbtgxxTZNVry3ZwcquO52%2B9%2F%2BOKjlWMcEkdWZUaOrQG9XfLNOq8Kst2MOXN%2Fb8GOq0CzT2fKUsJ%2Fi58qmv7uPYAuo8N6xl9oqmPZ8FMah4P2V0HCa7OmPvJ%2BS180Mi8Gi5cRf%2FxjMQAiPE%2FjiZa87L2k73l6t1baMP0kcbcZTe6FQqWRiayLk%2Brx4r9i9lJPzHKXziif5BHI8kIyK192vnzqXFl42iL%2B%2BkXJ2V%2FC7nw70RiciiNz5OntQTAwfbQpfWyPvU3VFwl%2BNwY4w6KWXqbx7mjdb%2FBoJTiu5clKSHJeJ44GLtTQ0q%2Fw%2BIDvj0GC%2BsBRdUf0jpCiGZEN%2Baw%2FKaOfRXSy1yW8iygsUUEY07L%2BpnY21uua%2Bw1K6UylaqBwDMOLrpRwKfMXAokY%2BAPuQYZwvy70XXJwzPZe5W7y54Aa9mnDS9gSQwRhLCjuKtGFjGm3x%2BRxLr8bFaZWJcY7g%3D%3D&X-Amz-Signature=894ea405cdcd5e297210bfdf92d40e08717094a462cd530b66eb6a9ac4c900f3&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            src="https://caephas-portfolio-storage.s3.eu-west-1.amazonaws.com/IMG_1965.jpeg"
            alt="Arinze"
            className="rounded-md object-contain w-full h-auto"
          />
        </div>

        {/* Right Column: Text */}
        <div className="w-full md:w-1/2">
          <p className="mt-6 leading-7">
            Hey, I'm Arinze. While my roots are firmly planted in Software
            Engineering, and I still love the challenge of building efficient,
            scalable systems, I'm increasingly passionate about diving deeper
            into Machine Learning and Research.
          </p>

          <p className="mt-6 leading-7">
            My current journey actually lets me explore both sides. As a
            Research Intern with{" "}
            <Link
              href="https://bds.ul.ie/members.html"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              BDS group
            </Link>
            , I'm focused on using evolutionary computing, specifically
            Grammatical Evolution, to design quantum circuits. This approach has
            proven successful: I was able to evolve a circuit for Grover's
            algorithm on 3 qubits that surpassed the world standard. It's
            fascinating work, and I'm currently applying these techniques to
            other algorithms. Simultaneously, I'm putting my project management
            skills to work for{" "}
            <Link
              href="https://thesafetychic.com/about/"
              className="underline font-semibold text-blue-600 dark:text-blue-400"
            >
              TheSafetyChic
            </Link>{" "}
            in Nigeria, guiding the development of a crucial child safety mobile
            app using Flutter. It's fulfilling to lead a project that speeds up
            getting help into users' hands and truly connects with them.
          </p>

          <p className="mt-6 leading-7">
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

          <p className="mt-6 leading-7">
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

          <p className="mt-6 leading-7">
            I'm particularly interested in building solutions that genuinely
            improve lives, particularly in child safety and education.
          </p>

          <p className="mt-6 leading-7">
            And when I'm not immersed in tech? You might catch me playing video
            games, or, just as importantly, spending time mentoring aspiring
            developers and contributing where I can to help others grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
