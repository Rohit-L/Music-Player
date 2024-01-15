"use client";

import createSong from "@/app/actions/createSong";
import { upload } from "@vercel/blob/client";
import { useRef, FormEvent } from "react";

const Page = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputArtistRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const title = inputTitleRef.current?.value;
    const artist = inputArtistRef.current?.value;
    const fileInput = inputFileRef.current;
    const file =
      fileInput && fileInput.files !== null ? fileInput.files[0] : null;

    if (!file || !title || !artist) {
      throw new Error("Form Incomplete");
    }

    const { url, pathname } = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/upload",
    });

    const response = await createSong(title, artist, url);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-sm">
        <form onSubmit={onSubmit}>
          <label className="form-control w-full" htmlFor="title">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              id="title"
              name="title"
              required
              ref={inputTitleRef}
            />
          </label>

          <label className="form-control w-full" htmlFor="artist">
            <div className="label">
              <span className="label-text">Artist</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              id="artist"
              name="artist"
              required
              ref={inputArtistRef}
            />
          </label>

          <label htmlFor="file"></label>
          <input
            type="file"
            id="file"
            className="file-input file-input-bordered w-full max-w-xs mt-4"
            required
            ref={inputFileRef}
            accept=".mp3"
          />

          <input
            type="submit"
            className="btn btn-primary mt-4"
            value="Upload"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Page;

// import { type PutBlobResult } from '@vercel/blob';
// import { upload } from '@vercel/blob/client';
// import { useState, useRef } from 'react';

// export default function AvatarUploadPage() {
//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [blob, setBlob] = useState<PutBlobResult | null>(null);
//   return (
//     <>
//       <h1>Upload Your Avatar</h1>

//       <form
//         onSubmit={async (event) => {
//           event.preventDefault();

//           if (!inputFileRef.current?.files) {
//             throw new Error('No file selected');
//           }

//           const file = inputFileRef.current.files[0];

//           const newBlob = await upload(file.name, file, {
//             access: 'public',
//             handleUploadUrl: '/api/avatar/upload',
//           });

//           setBlob(newBlob);
//         }}
//       >
//         <input name="file" ref={inputFileRef} type="file" required />
//         <button type="submit">Upload</button>
//       </form>
//       {blob && (
//         <div>
//           Blob url: <a href={blob.url}>{blob.url}</a>
//         </div>
//       )}
//     </>
//   );
// }
