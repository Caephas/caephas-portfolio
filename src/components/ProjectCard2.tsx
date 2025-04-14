import Link from 'next/link';

const ProjectCard2 = ({
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
      <div className="p-4 bg-accentLight dark:bg-accentDark w-full rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-100 line-clamp-4">
          {exerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="w-14 mt-3 px-1 text-white text-sm bg-gray-900 dark:bg-black rounded-md">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard2;
