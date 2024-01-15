import { fetchSongs } from "@/app/lib/data";
import HomePage from "@/components/HomePage";

const Page = async () => {
  const songs = await fetchSongs();
  return <HomePage songs={songs} />;
};

export default Page;
