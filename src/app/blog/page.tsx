'use client';

import { useEffect, useState } from 'react';
import BlogPostcard2 from '@/components/BlogPostCard2';
import { BlogFilter } from '@/components/BlogFilter';
import { LoaderCircle } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  link: string;
  pubDate: number;
  category?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts', {
          cache: 'no-store',
          next: { revalidate: 0 }
        });
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
        console.log(fetchedPosts);
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(
            fetchedPosts.map((post: Post) => post.category).filter(Boolean)
          )
        ) as string[];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="p-6">
        <h2 className="text-6xl">Blog</h2>
        <div className="mt-12 h-[50vh] flex items-center justify-center">
          <LoaderCircle className="animate-spin h-6 w-6" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="md:flex justify-between items-center">
        <h2 className="text-6xl">Blog</h2>
        <div className="mt-6 md:mt-0">
          <BlogFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogPostcard2
              title={post.title}
              link={post.link}
              date={post.pubDate}
              category={post.category}
              key={post.id}
            />
          ))
        ) : (
          <p className="text-lg col-span-3 text-center">No posts found</p>
        )}
      </div>
    </div>
  );
}
