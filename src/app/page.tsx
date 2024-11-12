import db from "@/index";
import { posts as postsTable } from "@/db/schema";

// Server action to fetch posts
async function getPosts() {
  "use server";
  try {
    const posts = await db.select().from(postsTable);
    console.log(`Fetched ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return []; // Return empty array if database isn't available
  }
}

export const dynamic = "force-dynamic"; // Add this to prevent static build

async function Page() {
  const posts = await getPosts();

  if (!posts.length) {
    return (
      <div className="mx-auto max-w-4xl p-4">
        <h1 className="mb-6 text-3xl font-bold">Blog Posts</h1>
        <p>No posts available.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-3xl font-bold">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="rounded-lg border p-4">
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Page;
