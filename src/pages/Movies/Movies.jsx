import React from "react";
import { useState, useEffect, useRef } from "react";
import MovieCard from "../../Components/shared/MovieCard";
import useFetch from "../../hooks/useFetch";
import { AiFillForward, AiFillBackward } from "react-icons/ai";


const API_KEY = import.meta.env.VITE_API_KEY;

const Movies = () => {
 

  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, isError } = useFetch(
    "movie/top_rated",
    `page=${currentPage}`,
    currentPage
  );

  console.log(data)
  const ref = useRef();

  const totalPages = data.total_pages;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const PER_PAGE = 5;
  let start = currentPage - Math.floor(PER_PAGE / 5);
  let end = start + PER_PAGE - 1;

  if (start < 1) {
    end += 1 - start;
    start = 1;
  }
  if (end > totalPages) {
    start -= end - totalPages;
    end = totalPages;
  }

  console.log(start)

  return (
    <>
    <h1 className="text-white font-bold text-[45px] px-5 py-10">Movies</h1>
      <div className="px-[20px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results?.map((movie, id) => (
          <MovieCard isMovie={true} movies={movie} />
        ))}
      </div>
      <div className="flex gap-2 item-center justify-center mb-10">
        <span
          className="cursor-pointer text-white pt-2 text-[25px]"
          onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
        >
          <AiFillBackward />
        </span>
        {pages.slice(start, end).map((page, index) => (
          <span
            className={`text-white p-2 border-[1px] rounded-full w-10 h-10 text-center cursor-pointer ${
              currentPage == page ? "bg-red-600" : "bg-transparent"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {page}
          </span>
        ))}
        <span
          className="cursor-pointer text-white pt-2 text-[25px]"
          onClick={() =>
            currentPage <= totalPages && setCurrentPage((prev) => prev + 1)
          }
        >
          <AiFillForward />
        </span>
        {/* <span className="cursor-pointer text-white" onClick={()=> currentPage <= totalPages && setCurrentPage(totalPages)}>goto last</span> */}
      </div>
    </>
  );
};

export default Movies;
