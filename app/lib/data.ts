import { sql } from "@vercel/postgres";
import { Song } from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchSongs() {
  noStore();
  try {
    const data = await sql<Song>`SELECT * FROM songs`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch songs data.");
  }
}
