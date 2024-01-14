"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async (formData: FormData) => {
  let title = formData.get("title");
  let artist = formData.get("artist");

  if (!title || !artist) {
    return {
      message: "Missing Fields. Failed to Create Song.",
    };
  }

  try {
    await sql`
      INSERT INTO songs (title, artist)
      VALUES (${title as string}, ${artist as string})
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
