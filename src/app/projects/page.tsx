import ProjectsList from "@/components/common/projects-list";
import Researches from "@/components/home/researches";

const page = () => {
  return (
    <section className="container flex flex-col py-20 px-6 gap-20">
      {/* header */}
      <header className="w-full flex flex-col justify-center items-center">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-primary w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-primary"></span> MY
          PROJECTS
        </h5>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Catch A Glimpse Of My Work
        </h3>
      </header>

      {/* projects list */}
      <ProjectsList displayAll={true} />

      {/* research docs */}
      <Researches />
    </section>
  );
};

export default page;
