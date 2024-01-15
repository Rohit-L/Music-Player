"use client";

import { Song } from "@/app/lib/definitions";
import { MouseEventHandler } from "react";

type PropsType = { song: Song; index: number; onClick: MouseEventHandler };
const SongRow = ({ song, index, onClick }: PropsType) => {
  return (
    <tr onClick={onClick} className="hover cursor-pointer" key={song.id}>
      <th>{index + 1}</th>
      <td>{song.title}</td>
      <td>{song.artist}</td>
    </tr>
  );
};

export default SongRow;
