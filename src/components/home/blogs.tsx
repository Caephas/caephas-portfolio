import React from "react";
import BlogList from "@/components/common/blog-list";

const Blogs = () => {
  return (
    <section className="container flex flex-col py-10 lg:py-20 gap-20">
      {/* header */}
      <header className="w-full flex flex-col justify-center items-center">
        <h5 className="text-center text-sm flex items-center justify-center gap-3 text-primary w-full">
          <span className="p-[2px] w-[25px] flex h-[1px] bg-primary"></span>{" "}
          BLOG
        </h5>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Read My Latest Articles
        </h3>
      </header>

      {/* blog list */}
      <BlogList displayAll={false} />
    </section>
  );
};

export default Blogs;
