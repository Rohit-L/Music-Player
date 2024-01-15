"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createSong = async (title: string, artist: string, url: string) => {
  if (!title || !artist || !url) {
    return {
      message: "Missing Fields. Failed to Create Song.",
    };
  }

  try {
    await sql`
      INSERT INTO songs (title, artist, url)
      VALUES (${title as string}, ${artist as string}, ${url as string})
    `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  revalidatePath("/");
  redirect("/");
};

export default createSong;
