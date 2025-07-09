import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

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
          I enjoy breaking down complex topics using analogies and sharing
          insights on software engineering, quantum computing, machine learning,
          and life.{" "}
        </p>

        <div className="flex items-center gap-3">
          <span className="bg-accent rounded-full p-4">
            <Mail color="#3C71DD" size={30} />
          </span>

          <p className="flex flex-col text-base">
            <span>Email</span>
            <span>Caephas@mail.com</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-accent rounded-full p-4">
            <Phone color="#3C71DD" size={30} />
          </span>

          <p className="flex flex-col text-base">
            <span>Phone</span>
            <span>+448098237363</span>
          </p>
        </div>

        <Button variant={"destructive"} size={"lg"} className="w-fit">
          Download CV
        </Button>
      </div>

      <div className="col-span-1 px-6 w-full">
        <Image src="/contact2.svg" alt="" width={500} height={300} />
      </div>

      <hr className="col-span-1 lg:col-span-2" />

      <div className="col-span-1 lg:col-span-2 flex flex-col-reverse lg:flex-row gap-3 items-center justify-between">
        <p className="text-sm text-white text-center">
          © {new Date().getFullYear()} Caephas. All Rights Reserved.
        </p>

        <div className="flex gap-10 items-center">
          <Linkedin size={30} />
          <Github size={30} />
          <Twitter size={30} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
