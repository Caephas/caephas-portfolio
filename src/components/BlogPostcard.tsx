import Link from 'next/link';

const BlogPostcard = ({
  title,
  excerpt,
  slug,
}: {
  title: string;
  excerpt: string;
  slug: string;
}) => {
  const header = title.toLowerCase().split(' ').join('-');
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full bg-accentLight dark:bg-accentDark p-4 rounded-lg">
        <div className="flex items-center gap-x-3 gap-y-6">
          <span className="text-green-700">$</span>
          <span className="text-xl flex items-center gap-3">
            <h3 className="">cat</h3>
            {/* <h3 className="line-clamp-1">optimizing-aws-lambda</h3> */}
            <h3 className="line-clamp-1">{header}</h3>
          </span>
          <div className="cursor"></div>
        </div>
        <div className="mt-3">
          <p className="line-clamp-6">{excerpt}</p>
          <p className="mt-3 text-sm">2025-02-10</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostcard;
