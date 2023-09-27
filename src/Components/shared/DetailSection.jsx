import React from "react";
import { getImage } from "../lib/constant";

const DetailSection = ({ movie }) => {
  const { backdrop_path, poster_path, original_title, overview, genres } =
    movie;
  return (
    <>
      <div className="py-10 md:py-20 flex flex-col md:flex-row items-center text-white">
        <img
          src={getImage(poster_path || backdrop_path)}
          alt=""
          className="w-[1000px] h-[70vh] object-cover"
        />
        <div className="px-[20px] flex flex-col items-start pt-[20px] ">
          <h3 className="text-[25px] pb-[10px] font-bold">{original_title}</h3>
          <p className="pb-[10px]">{overview}</p>
          <div className="flex items-center gap-2 font-bold">
            Genre: {genres?.map((genre) => (
              <span className='text-green-500 font-normal'>{genre.name}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
