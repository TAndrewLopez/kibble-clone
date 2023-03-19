import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="flex items-center w-auto px-2 py-1 font-semibold transition bg-white rounded-md md:py-2 md:px-4 text-sx lg:text-lg hover:bg-neutral-300">
      <BsFillPlayFill className="mr-1" size={25} /> Play
    </button>
  );
};

export default PlayButton;
