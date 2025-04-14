import React from 'react';

const page = () => {
  return (
    <div className="p-6">
      <h2 className="text-6xl">About</h2>
      <div className="">
        <p className="mt-6">
          I am a software engineer with a strong foundation in computer science
          and software engineering. I have a passion for building scalable and
          maintainable software systems, and I am always looking for new
          challenges and opportunities to learn and grow in my field.
        </p>
        <h3 className="mt-12 text-3xl font-bold">Languages</h3>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>Python</p>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>JavaScript</p>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>TypeScript</p>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>Java</p>
          </li>
        </ul>
        <h3 className="mt-12 text-3xl font-bold">Frameworks</h3>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>Django</p>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>Express.js</p>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>Springboot</p>
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-2" />
            <p>Deno</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
