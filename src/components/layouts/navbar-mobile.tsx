"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { SquareMenu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  navLinks: {
    name: string;
    link: string;
  }[];
}

const NavbarMobile = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <nav className="bg-navBg py-4 px-6 flex lg:hidden text-white justify-between items-center">
      <Link href="/" className="text-2xl">
        <Image src="/logo.svg" alt="" width={150} height={20} />
      </Link>

      <Sheet>
        <SheetTrigger>
          <SquareMenu size={40} strokeWidth={1.75} absoluteStrokeWidth />
        </SheetTrigger>

        <SheetContent className="pt-20">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex flex-col gap-7">
              {/* links */}
              <div className="flex flex-col gap-6">
                {navLinks?.map((item, i) => {
                  const isActive = pathname === item.link;

                  return (
                    <div key={i} className="group flex items-center">
                      <SheetClose asChild>
                        <Link
                          href={item.link}
                          className={`text-lg font-sans flex items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-110 ${
                            isActive ? "font-semibold" : ""
                          }`}
                        >
                          {/* Circle */}
                          <span
                            className={`w-2 h-2 rounded-full bg-foreground transition-opacity duration-200 ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />

                          {item.name}
                        </Link>
                      </SheetClose>
                    </div>
                  );
                })}
              </div>

              <SheetClose asChild>
                <Button
                  onClick={() => push("/#contact_me")}
                  className="bg-navBtn text-navBtnForeground w-fit hover:bg-navBtn"
                >
                  Contact Me.
                </Button>
              </SheetClose>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavbarMobile;
