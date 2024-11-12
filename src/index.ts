import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

console.log("Using DATABASE_URL", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

const db = drizzle(pool);

export default db;
