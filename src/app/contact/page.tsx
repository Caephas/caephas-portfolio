import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="p-6">
      <h2 className="text-6xl">Contact</h2>
      <div className="">
        <p className="mt-6 leading-7">
          Hi there, I am a software and machine learning engineer with a passion for building scalable and maintainable software systems. I am always looking for new challenges and opportunities to learn and grow in my field, and I'm actively seeking roles in software engineering, machine learning, and research. If you have any questions or would like to discuss potential projects or collaborations, feel free to reach out to me via email at{' '}
          <a href="mailto:arinzeobidiegwu@gmail.com" className="underline">
            arinzeobidiegwu@gmail.com
          </a>.
        </p>
        <p className="mt-6 leading-7">
          You can also find me on{' '}
          <a
            href="https://github.com/caephas"
            // className="underline"
            className="underline font-semibold text-blue-600 dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/arinze-obidiegwu-a71a78188/"
            // className="underline"
            className="underline font-semibold text-blue-600 dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , where you can view my work history.
        </p>
        <p className="mt-6 leading-7">
          If you are a recruiter or someone looking to hire a software or machine learning engineer, please don't hesitate to reach out. I would be happy to discuss your needs and explore opportunities.
        </p>
        <p className="mt-6 leading-7">
          Let’s connect, feel free to email me or message me on LinkedIn for further discussion.
        </p>
      </div>
    </div>
  );
};

export default page;