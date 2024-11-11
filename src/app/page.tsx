import db from "@/index";
import { posts as postsTable } from "@/db/schema";

// Server action to fetch posts
async function getPosts() {
  "use server";
  const posts = await db.select().from(postsTable);
  console.log(`Fetched ${posts.length} posts`);
  return posts;
}

async function Page() {
  // Use server action to fetch posts
  const posts = await getPosts();

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
