import Link from 'next/link';

export const Node = ({
  className,
  link,
}: {
  className?: string;
  link?: string;
}) => {
  return (
    <Link href={`/${link}`}>
      <div className={`rounded-full w-12 h-12 bg-slate-500 ${className}`}></div>
    </Link>
  );
};

export const NodeLink = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`absolute bg-light dark:bg-dark ${className}`}>
      {children}
    </div>
  );
};

export const Nodes = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <Node className="" link="" />
      <Node className="absolute top-4 left-10" link="about" />
      <Node className="absolute top-3 right-[100px]" link="projects" />
      <Node className="absolute bottom-12 left-20" link="blog" />
      <Node className="absolute bottom-[100px] right-14" link="contact" />
    </div>
  );
};
