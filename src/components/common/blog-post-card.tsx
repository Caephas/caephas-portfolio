import Link from "next/link";

const BlogPostCard = ({
  title,
  link,
  date,
  category,
}: {
  title: string;
  link: string;
  date: number;
  category?: string;
}) => {
  const header = title;
  // .toLowerCase().split(' ').join('-')
  const pubDate = new Date(date).toLocaleDateString();
  return (
    <Link href={link} target="_blank">
      <div className="h-full w-full bg-accent border border-secondary p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-start gap-x-3 gap-y-6">
          <p className="text-green-700">$</p>
          <h3 className="line-clamp-2 text-2xl">{header}</h3>
        </div>

        <div className="mt-3 flex justify-between">
          <p className="mt-3 text-sm text-accent-yellow">{category}</p>
          <p className="mt-3 text-sm italic">{pubDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
