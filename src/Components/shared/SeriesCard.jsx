import React, {useContext} from "react";
import { getImage } from "../lib/constant";
import { Link } from "react-router-dom";
import {BsFillBookmarkFill} from 'react-icons/bs'
import { bookmarkContext } from "../context/BookmarkContext";

const SeriesCard = ({ series }) => {
  const { backdrop_path, poster_path, original_name, first_air_date, id } =
    series;

  const { addMovies, removeMovie, bookmarkMovies} = useContext(bookmarkContext);

  const checkCurrentMovie = bookmarkMovies.find((series) => series.id == id);

  console.log("This is current movie", checkCurrentMovie?"hello":"ss")

  return (
    <>
      <div className="relative flex-shrink-0 w-full max-w-[450px]">
        <div className="bg-[#5d6378] z-10 w-[40px] h-[40px] rounded-full absolute top-3 right-3">
        <BsFillBookmarkFill
            onClick={(e) => {
              if (!checkCurrentMovie) {
                addMovies(series);
              } else {
                removeMovie(series);
              }
            }}
            className={`text-[20px] absolute top-[10px] right-[11px]  ${
              checkCurrentMovie ? "text-red-400":"text-white"
            } cursor-pointer`}/>
        </div>
        <Link to={`/movies/${id}`}>
          <div className="gap-[30px]">
            <img
              src={getImage(backdrop_path || poster_path)}
              alt=""
              className=" w-[400px] h-[200px]  object-cover rounded-tl-md rounded-tr-md relative"
            />
            <div className="flex flex-col text-white hover:bg-[#1e2536] rounded-bl-md rounded-br-md p-[10px]">
              <p className="font-bold text-[20px] md:text-[10px] lg:text-[25px]">
                {original_name}
              </p>
              <p className="md:text-[13px]">{first_air_date}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SeriesCard;
