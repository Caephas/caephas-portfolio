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
            src="https://firebasestorage.googleapis.com/v0/b/adventures-of-muna.appspot.com/o/test%2FIMG_1965.jpeg?alt=media&token=6bc95264-ca85-4393-9770-7057ce04c1cb"
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