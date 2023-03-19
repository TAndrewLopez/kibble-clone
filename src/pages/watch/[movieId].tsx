import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const WatchMovie = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: movie } = useMovie(movieId as string);

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="fixed z-10 flex items-center w-full gap-8 p-4 bg-black/70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={40}
        />
        <p className="text-xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching:</span>
          {movie?.title}
        </p>
      </nav>
      <video
        className="w-full h-full"
        autoPlay
        controls
        src={movie?.videoUrl}
      />
    </div>
  );
};

export default WatchMovie;
