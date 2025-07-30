import { FileText } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import PDFViewerWithPagination from "../common/pdf-viewer";

const Researches = () => {
  const research_list = [
    {
      name: "Robotics to Understand Human and Animal behaviour",
      title: "Co-author",
      link: "/researches/research1.pdf",
      authors: [
        "Arinze Obidiegwu",
        "Maharshi Dutta",
        "Abhinav kumar",
        "Vijay Bhatnagar",
      ],
    },
    {
      name: "Evolving Grover Circuits via Grammatical Evolution",
      title: "Author",
      link: "/researches/research2.pdf",
      authors: ["Arinze Obidiegwu"],
    },
  ];

  return (
    <section className="container flex flex-col py-10 lg:py-20 gap-20">
      {/* header */}
      <header className="w-full flex flex-col justify-center items-center">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-primary w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-primary"></span>{" "}
          RESEARCHES
        </h5>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
          My Research Documentations & Papers
        </h3>
      </header>

      {/* certificates list */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center mx-auto gap-x-10 gap-y-10">
        {research_list?.map((item, i) => {
          return (
            <div
              key={i}
              className="flex group h-full relative items-center gap-2 lg:gap-6 border rounded py-4 px-8 shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <FileText
                size={60}
                color="#b51c1c"
                className="hidden md:flex min-w-[60px]"
              />

              <div className=" flex flex-col">
                <h4 className="text-base md:text-lg">
                  {item?.name} | {item?.title}{" "}
                </h4>

                <div className="flex flex-wrap gap-2 items-center mt-2">
                  {item?.authors?.map((a, i) => (
                    <span
                      key={i}
                      className="bg-accent border border-muted-foreground text-accent-foreground py-1 px-2 rounded-full text-[10px]"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <div className="bg-accent/75 flex justify-center items-center absolute left-0 top-0 w-full h-full transform -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
                  <PDFViewerWithPagination paperLink={item?.link} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Researches;
