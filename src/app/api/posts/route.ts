import { NextResponse } from 'next/server';
import { MediumClient } from 'medium-sdk-ts';

const medium = new MediumClient(process.env.MEDIUM_ACCESS_TOKEN || '');

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await medium.getPosts(`@${process.env.MEDIUM_USERNAME}`);

    const postsWithCategories = posts.map((post) => ({
      ...post,
      category: post.categories[0] || '',
    }));

    return NextResponse.json(postsWithCategories);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
