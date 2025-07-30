import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Certification = () => {
  const cert = [
    {
      name: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/13fa4680-9566-4948-9acb-4ab0f5d66437/linked_in_profile",
      skills: [
        "Machine Learning",
        "Machine Vision",
        "Data Engineering",
        "AWS Cloud Computing",
      ],
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/6ae44153-918e-43f5-a914-123cb5e0321a/linked_in_profile",
      skills: [
        "Cloud Engineering",
        "AWS Cloud",
        "AWS Core Services",
        "AWS Architechture",
      ],
    },
    {
      name: "Basics of Quantum Information",
      issuer: "IBM",
      link: "https://www.credly.com/badges/5722dae9-6af3-4565-9146-c855d04323c7",
      skills: ["Quantum Computation", "Quantum Information", "Quantum Theory"],
    },
    {
      name: "IBM Quantum Challenge 2024 Achievement",
      issuer: "IBM",
      link: "https://www.credly.com/badges/3c2fee75-a229-4f7f-832c-6ca11b0bef6a",
      skills: [
        "Developer",
        "Python",
        "Qiskit 1.x",
        "Qiskit Patterns",
        "Quantum Computing",
      ],
    },
  ];
  return (
    <section className="container flex flex-col py-10 lg:py-20 gap-20">
      {/* header */}
      <header className="w-full flex flex-col justify-center items-center">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-primary w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-primary"></span>{" "}
          CERTIFICATIONS
        </h5>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
          My Certificates & Achievements
        </h3>
      </header>

      {/* certificates list */}
      <div className="grid grid-cols-1 items-center mx-auto gap-x-10 gap-y-10">
        {cert?.map((item, i) => {
          return (
            <div key={i} className="flex items-center gap-2 lg:gap-6">
              <ShieldCheck
                size={60}
                color="#3C71DD"
                className="hidden md:flex min-w-[60px]"
              />

              <div className=" flex flex-col">
                <h4 className="text-xl md:text-3xl">{item?.name}</h4>
                <p>{item?.issuer}</p>

                <div className="flex flex-wrap gap-3 items-center mt-2">
                  {item?.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-accent border border-muted-foreground text-accent-foreground py-1 px-2 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  target="_blank"
                  href={item?.link}
                  className="text-sm underline mt-2 text-primary"
                >
                  View Cert.
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certification;
