import React, { useEffect, memo } from "react";
import { useState, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import MovieCard from "../../Components/shared/MovieCard";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import useFetch from "../../hooks/useFetch";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState([]);
  const {data, isError, loading} = useFetch("trending/all/day")

  console.log("This is our hook", data)

  const navigate = useNavigate();

  const handleSumit = async (e) => {
    e.preventDefault();

    navigate(`search/${query}`);
  };

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();

    console.log(data);
    setMovies(data.results);
  };

  useMemo(()=>{ fetchMovies()},[query])
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex flex-col items-start">
          <form
            onSubmit={handleSumit}
            className="flex m-[30px] items-center w-full justify-center gap-5 lg:mt-[50px]"
          >
            <BiSearch className="text-[35px] text-white md:text-[45px] lg:text-[30px]" />
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for Movies or TV series"
              className="bg-transparent outline-none text-white p:[20px] text-[20px] w-full flex-1 md:text-[35px] lg:text-[28px] lg:w-[500px]"
            />
          </form>
          <h2 className="text-white text-[30px] mt-5 md:text-[35px] m-[30px] md:mt-10">
            Trending
          </h2>
          {/* <div className=" w-full bg-red-50">
            <Splide
              options={{
                perPage: 4,
                perMove: 1,
                // autoWidth: true,
                gap: "1.2rem",
              }}
            >
              {movies.map((movie, id) => (
                <SplideSlide>
                  <MovieCard movies={movie} key={id} />
                </SplideSlide>
              ))}
            </Splide>
          </div> */}
        </div>
        <div className="w-full">
  
          <h2 className="text-white text-[30px] mt-5 md:text-[35px] m-[30px] md:mt-10">
            Recommended for you
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-5 md:px-10 pb-[50px]">
            {movies.map((movie, id) => (
              <MovieCard movies={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// export default memo(Homepage);
export default Homepage;
