import React from 'react';

const page = () => {
  return (
    <div className="p-6">
      <h2 className="text-6xl">Contact</h2>
      <div className="">
        <p className="mt-6">
          Hi there, I am a backend and machine learning engineer with a passion
          for building scalable and maintainable software systems. I am always
          looking for new challenges and opportunities to learn and grow in my
          field. If you have any questions or would like to discuss any
          potential projects or collaborations, feel free to reach out to me via
          email at{' '}
          <a href="mailto:caephas@gmail.com" className="underline">
            caephas@gmail.com
          </a>
          .
        </p>
        <p className="mt-6">
          You can also find me on{' '}
          <a href="https://github.com/caephas" className="underline">
            github
          </a>
          , where I share my personal projects and contribute to open source
          projects.
        </p>
        <p className="mt-6">
          If you are a recruiter or someone looking to hire a backend or machine
          learning engineer, please don't hesitate to reach out to me. I am
          always open to new opportunities and would be happy to discuss your
          needs.
        </p>
      </div>
    </div>
  );
};

export default page;
