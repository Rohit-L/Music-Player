"use client";

import SongRow from "@/components/SongRow";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Song } from "@/app/lib/definitions";
import { useState } from "react";

type PropsType = { songs: Song[] };
const HomePage = ({ songs }: PropsType) => {
  const [selectedSong, setSelectedSong] = useState<Song>();

  return (
    <div className="overflow-x-auto flex flex-col min-h-full">
      <div className="grow">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <SongRow
                song={song}
                index={index}
                key={song.id}
                onClick={() => setSelectedSong(song)}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedSong ? <AudioPlayer autoPlay src={selectedSong.url} /> : null}
    </div>
  );
};

export default HomePage;
