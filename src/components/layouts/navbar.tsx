import React from "react";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <>
      <NavbarDesktop navLinks={navLinks} />
      <NavbarMobile navLinks={navLinks} />
    </>
  );
};

export default Navbar;
