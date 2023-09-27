import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../../Components/shared/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
    );

    const data = await res.json();
    console.log("thus", data);

    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
    <h1 className="text-white font-bold text-[45px] px-5 py-10">Movies</h1>
      <div className="px-[20px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie, id) => (
          <MovieCard movies={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
