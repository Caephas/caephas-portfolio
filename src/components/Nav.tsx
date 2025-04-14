'use client';
import { useEffect, useState } from 'react';
import { Github, X, Menu } from 'lucide-react';
import Link from 'next/link';

import gsap from 'gsap';

const Nav = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const onClose = () => {
    gsap.to('.link2', {
      y: -60,
    });
    gsap.to('.link3', {
      y: -120,
    });
    gsap.to('.link4', {
      y: -180,
    });
    gsap.to('.link5', {
      y: -240,
    });
    gsap.to('.menu', {
      opacity: 0,
      onComplete: () => setIsOpen(false),
    });
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to('.menu', {
        opacity: 1,
        duration: 0.2,
      });
      gsap.to('.links', {
        opacity: 1,
        y: 0,
        ease: 'power2.inOut',
        duration: 0.5,
      });
    } else {
      gsap.to('.link1', {
        opacity: 0,
        y: 0,
      });
      gsap.to('.link2', {
        opacity: 0,
        y: -60,
      });
      gsap.to('.link3', {
        opacity: 0,
        y: -120,
      });
      gsap.to('.link4', {
        opacity: 0,
        y: -180,
      });
      gsap.to('.link5', {
        opacity: 0,
        y: -240,
      });
    }
  }, [isOpen]);
  return (
    <nav className={`flex flex-col ${className}`}>
      <Menu
        className="h-9 w-9 cursor-pointer self-end relative top-3 right-3"
        onClick={() => handleClick()}
      />
      <div
        className={`opacity-0 fixed top-0 z-50 h-screen w-screen bg-light dark:bg-dark menu ${
          isOpen ? 'block' : 'hidden'
        }`}>
        <div className="relative h-full w-full">
          <X
            className="h-9 w-9 absolute top-4 right-4 cursor-pointer"
            onClick={() => onClose()}
          />
          <div className="pl-3 lg:pl-6 py-6 flex flex-col gap-7">
            {navLinks.map((link, index) => {
              return (
                <Link
                  href={link.link}
                  onClick={() => onClose()}
                  key={link.name}
                  className={`bg-light dark:bg-dark text-black dark:text-white w-4/5 links link${
                    index + 1
                  } lg:hover:underline`}>
                  <p className="text-6xl">{link.name}</p>
                </Link>
              );
            })}
          </div>
          <div className="border-t border-black absolute bottom-0 h-auto w-full px-3 py-2">
            <div className="w-full flex flex-col items-end">
              <Github />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
