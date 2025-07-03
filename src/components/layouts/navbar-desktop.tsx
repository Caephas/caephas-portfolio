"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  navLinks: {
    name: string;
    link: string;
  }[];
}

const NavbarDesktop = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="hidden container bg-navBg py-4 px-6 rounded-full text-white lg:flex items-center justify-between gap-5">
      <Link href="/" className="text-2xl">
        Arinze.
      </Link>

      {/* links */}
      <div className="flex gap-6">
        {navLinks?.map((item, i) => {
          const isActive = pathname === item.link;

          return (
            <div key={i} className="group flex items-center">
              <Link
                href={item.link}
                className={`text-lg font-sans flex items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-110 ${
                  isActive ? "font-medium" : ""
                }`}
              >
                {/* Circle */}
                <span
                  className={`w-2 h-2 rounded-full bg-white transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {item.name}
              </Link>
            </div>
          );
        })}
      </div>

      <Button className="bg-navBtn text-navBtnForeground hover:bg-navBtn">
        Contact Me.
      </Button>
    </nav>
  );
};

export default NavbarDesktop;
