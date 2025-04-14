import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/client';

import BlogPostcard from '@/components/BlogPostcard';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, excerpt}`;

const options = { next: { revalidate: 30 } };

const page = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <div className="p-6">
      <h2 className="text-6xl">Blog</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {posts.map((post) => (
          <BlogPostcard
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug.current}
            key={post._id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
