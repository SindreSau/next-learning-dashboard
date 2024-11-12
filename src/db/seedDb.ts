import "dotenv/config";
import db from "../index";
import { posts as postsTable } from "./schema";

async function seedDb() {
  try {
    const posts = await db.select().from(postsTable);
    if (posts.length > 0) {
      console.log("Database already seeded!");
      return;
    }

    const newPosts = await db.insert(postsTable).values([
      {
        title: "Getting Started with TypeScript",
        content:
          "TypeScript is a powerful superset of JavaScript that adds static typing...",
      },
      {
        title: "Understanding Database Design",
        content:
          "When designing a database, it's important to consider normalization...",
      },
      {
        title: "Web Development Best Practices",
        content:
          "Here are some key principles to follow when building web applications...",
      },
      {
        title: "Introduction to API Design",
        content:
          "RESTful APIs are a common way to expose your data to other services...",
      },
      {
        title: "Mastering Git Workflows",
        content:
          "Version control is essential for modern software development...",
      },
    ]);
    console.log("Database seeded successfully!");
    console.log(newPosts);
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDb();
