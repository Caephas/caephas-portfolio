"use client";

import { useEffect, useState } from "react";
import { BlogFilter } from "@/components/BlogFilter";
import ProjectListLoader from "../loaders/projects-loaders";
import BlogPostCard from "../BlogPostCard";

interface Post {
  id: string;
  title: string;
  link: string;
  pubDate: number;
  category?: string;
}

interface Props {
  showFilter?: boolean;
  displayAll?: boolean;
}

const BlogList = ({ showFilter = false, displayAll = false }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts", {
          cache: "no-store",
          next: { revalidate: 0 },
        });
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);

        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(
            fetchedPosts.map((post: Post) => post.category).filter(Boolean)
          )
        ) as string[];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const visiblePosts = displayAll ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <section className="flex flex-col">
      {isLoading && (
        <div className="mt-12">
          <ProjectListLoader />
        </div>
      )}

      {!isLoading && showFilter && (
        <div className="my-6 md:mt-0">
          <BlogFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {!isLoading &&
          visiblePosts.length > 0 &&
          visiblePosts.map((post) => (
            <BlogPostCard
              title={post.title}
              link={post.link}
              date={post.pubDate}
              category={post.category}
              key={post.id}
            />
          ))}

        {!isLoading && visiblePosts.length < 1 && <p>No Posts Found</p>}
      </div>
    </section>
  );
};

export default BlogList;
