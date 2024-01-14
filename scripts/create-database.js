const { db } = require("@vercel/postgres");

async function seedSongs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS songs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
      );
    `;

    console.log(`Created "songs" table`);
  } catch (error) {
    console.error("Error creating songs table", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedSongs(client);
  await client.end();
}

main().catch((error) =>
  console.error(
    "An error occurred while attempting to seed the database:",
    error
  )
);
