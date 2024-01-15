import { fetchSongs } from "@/app/lib/data";
import SongRow from "@/components/SongRow";

const Page = async () => {
  const songs = await fetchSongs();
  console.log(songs);
  return (
    <div className="overflow-x-auto">
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
            <SongRow song={song} index={index} key={song.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Page;
