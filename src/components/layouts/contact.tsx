import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cn, scaleStyle } from "@/lib/utils";

const Contact = () => {
  return (
    <section
      id="contact_me"
      className="container grid grid-cols-1 lg:grid-cols-2 bg-primary text-white rounded-2xl p-6 lg:p-20 gap-10 mt-20"
    >
      <header className="w-full col-span-1 lg:col-span-2 flex flex-col justify-center items-center mb-10">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-foreground w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-white"></span>
          SAY HELLO 👋
        </h5>
        <h3 className=" text-3xl md:text-4xl lg:text-5xl text-center">
          Let's Connect
        </h3>
      </header>

      <div className="col-span-1 flex flex-col gap-6 w-full lg:px-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
          Arinze Obidiegwu,
        </h2>
        <p>
          I am always looking for new challenges and opportunities to learn and
          grow in my field, and I'm actively seeking roles in software
          engineering, machine learning, and research.
          <br />
          <br />
          <span>
            If you have any questions or would like to discuss potential
            projects or collaborations, feel free to reach out to me
          </span>
        </p>

        <div className="flex items-center gap-3">
          <span className="bg-accent rounded-full p-4">
            <Mail color="#3C71DD" size={30} />
          </span>

          <p className="flex flex-col text-base">
            <span>Email</span>
            <a
              href="mailto:arinzeobidiegwu@gmail.com"
              className="hover:underline"
            >
              arinzeobidiegwu@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-accent rounded-full p-4">
            <Phone color="#3C71DD" size={30} />
          </span>

          <p className="flex flex-col text-base">
            <span>Phone</span>
            <a href="tel:+3530870309305">+3530870309305</a>
          </p>
        </div>

        <a
          href="mailto:arinzeobidiegwu@gmail.com"
          className="bg-destructive text-destructive-foreground hover:bg-destructive/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm lg:text-base font-medium transition-transform duration-200 ease-in-out px-8 w-fit h-11"
        >
          Request CV
        </a>
      </div>

      <div className="col-span-1 px-6 w-full">
        <Image src="/contact2.svg" alt="" width={500} height={300} />
      </div>

      <hr className="col-span-1 lg:col-span-2" />

      <div className="col-span-1 lg:col-span-2 flex flex-col-reverse lg:flex-row gap-3 items-center justify-between">
        <p className="text-sm text-white text-center">
          © {new Date().getFullYear()} Caephas. All Rights Reserved.
        </p>

        <p className="text-sm text-white text-center">
          Designed & Built by{" "}
          <a href="mailto:priscaebube@gmail.com" className="text-accent-yellow">
            Prisca
          </a>
        </p>

        <div className="flex gap-10 items-center transition-transform">
          <Link
            href="https://www.linkedin.com/in/arinze-obidiegwu-a71a78188"
            className={cn(scaleStyle)}
          >
            <Linkedin size={30} />
          </Link>
          <Link href="https://github.com/caephas" className={cn(scaleStyle)}>
            <Github size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
