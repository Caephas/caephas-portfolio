'use client';
import Link from 'next/link';
import Marquee from './Marquee';
import LED from './LED';
const ProjectCard = ({ delay }: { delay: number }) => {
  return (
    <Link href={'/projects/1'}>
      <div className="h-[100px] w-[300px] px-4 py-4 bg-[#e3e3e3] dark:bg-[#1E1E1E] rounded-lg relative">
        {/* <span className="absolute top-4 right-4 h-3 w-3 bg-green-500 rounded-full after:block after:bg-green-500 after:opacity-40 after:h-6 after:w-6 after:rounded-full after:absolute after:-left-[6px] after:-bottom-[6px]"></span> */}
        <LED className="absolute top-4 right-4" delay={delay} />
        <div className="px-1 h-9 w-11/12 bg-black border border-gray-600 rounded-lg overflow-hidden">
          <span className="h-9 w-full">
            <Marquee text="Project Name" />
          </span>
        </div>
        <div className="w-12 mt-3 px-1 text-white text-sm bg-black border border-gray-600 rounded-md">
          AI
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
