import Link from 'next/link';

const BlogPostcard2 = ({
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
      <div className="h-full w-full bg-accentLight dark:bg-accentDark p-4 rounded-lg flex flex-col justify-between">
        <div className="flex items-start gap-x-3 gap-y-6">
          <p className="text-green-700">$</p>

          <div className="w-11/12">
            <h3 className="line-clamp-3 text-2xl">{header}</h3>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <p className="mt-3 text-sm italic">{category}</p>
          <p className="mt-3 text-sm italic">{pubDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostcard2;
