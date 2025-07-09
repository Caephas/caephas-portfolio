import { ExternalLink } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({
  title,
  link,
  exerpt,
  category,
}: {
  title: string;
  link: string;
  exerpt: string | undefined;
  category: string | undefined;
}) => {
  return (
    <Link href={link}>
      <div className="group h-full flex flex-col justify-between gap-6 bg-accent px-6 py-10 border-primary rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex justify-between items-start relative overflow-visible">
          <h4 className="flex flex-col text-xl md:text-3xl">
            <span className="text-xs">PROJECT TITLE</span> {title}
          </h4>

          <ExternalLink
            size={20}
            color="#3c71dd"
            className="transform -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            strokeWidth={3}
            absoluteStrokeWidth
          />
        </div>

        <p className="text-base text-accent-foreground">{exerpt}</p>

        <span className="place-self-end w-fit bg-accent-yellow text-white text-xs rounded-full px-2 py-[2px]">
          {category}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
