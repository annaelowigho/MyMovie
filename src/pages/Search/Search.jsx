import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import MovieCard from "../../Components/shared/MovieCard";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();

  const fetchSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${
          params.slug
        }&include_adult=false&language=en-US&page=1desc&api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );

      const data = await res.json();
      setLoading(false);

      console.log("i am", data);

      setSearch(data.results);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen w-full grid place-items-center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen w-full grid place-items-center">
        <h1 className="text-white">Sorry an error occured</h1>
    </div>;
  }

  return (
    <div className="px-[80px] py-[50px]">
      <h1 className="pb-[20px] text-[30px] font-bold">Results:</h1>
      {search.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {search.map((movie) => (
            <MovieCard movies={movie} />
          ))}
        </div>
      ) : (
        <>No result found for '{params.slug}'</>
      )}
    </div>
  );
};

export default Search;
