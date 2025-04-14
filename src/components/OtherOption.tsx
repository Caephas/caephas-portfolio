import { Github, X } from 'lucide-react';
import Link from 'next/link';

const OtherOption = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <div className="relative h-full w-full">
      <X className="h-9 w-9 absolute top-4 right-4" />
      <div className="py-6 flex flex-col gap-7">
        {navLinks.map((link) => {
          return (
            <Link href={link.link}>
              <h1 className="text-7xl">{link.name}</h1>
            </Link>
          );
        })}
      </div>
      <div className="border-t-2 border-white absolute bottom-0 h-auto w-full px-3 py-2">
        <div className="w-full flex flex-col items-end">
          <Github />
        </div>
      </div>
    </div>
  );
};

export default OtherOption;
