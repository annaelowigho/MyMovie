import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../lib/constant";
import { BsFillBookmarkFill } from "react-icons/bs";
import { bookmarkContext } from "../context/BookmarkContext";

const MovieCard = ({ movies, isMovie }) => {
  const { addMovies, removeMovie, bookmarkMovies } =
    useContext(bookmarkContext);
  const {
    poster_path,
    backdrop_path,
    media_type,
    release_date,
    first_air_date,
    adult,
    original_title,
    title,
    original_name,
    id,
  } = movies;


  const checkCurrentMovie = bookmarkMovies.find((movie) => movie.id == id);

  return (
    <>
      <div className="relative flex-shrink-0 w-full max-w-[450px]">
        <div className="bg-[#5d6378] z-10 w-[40px] h-[40px] rounded-full absolute top-3 right-3">
          <BsFillBookmarkFill
            onClick={(e) => {
              if (!checkCurrentMovie) {
                addMovies(movies);
              } else {
                removeMovie(movies);
              }
            }}
            className={`text-[20px] absolute top-[10px] right-[11px]  ${
              checkCurrentMovie ? "text-red-400":"text-white"
            } cursor-pointer`}/>
        </div>
        <Link
          to={`/movies/${id}?mediaType=${isMovie ? "movie" :media_type}`}
          className="text-white pb-[20px] cursor-pointer relative"
        >
          <img
            src={getImage(poster_path || backdrop_path)}
            alt=""
            className="w-[400px] h-[200px]  object-cover rounded-tl-md rounded-tr-md "
          />

          <div className="flex flex-col gap-[10px] hover:bg-[#1e2536] rounded-bl-md rounded-br-md p-[10px]">
            <div className="flex items-center gap-2">
              <p className="md:text-[13px]">{release_date || first_air_date}</p>
              <span>|</span>
              <p className="md:text-[13px]">{adult ? "+18" : "PG"}</p>
              <span>|</span>
              <p className="md:text-[13px]">{media_type}</p>
            </div>
            <p className="font-bold text-[20px] md:text-[10px] lg:text-[25px]">
              {original_title || title || original_name}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
