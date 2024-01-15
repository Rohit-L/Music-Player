"use client";

import { Song } from "@/app/lib/definitions";

type PropsType = { song: Song; index: number };
const SongRow = ({ song, index }: PropsType) => {
  const playSong = () => {
    new Audio(song.url).play();
  };
  return (
    <tr className="hover cursor-pointer" key={song.id} onClick={playSong}>
      <th>{index + 1}</th>
      <td>{song.title}</td>
      <td>{song.artist}</td>
    </tr>
  );
};

export default SongRow;
