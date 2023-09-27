import React from "react";
import { useState, useEffect } from "react";
import SeriesCard from "../../Components/shared/SeriesCard";

const API_KEY = import.meta.env.VITE_API_KEY;

const Series = () => {
  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
    );

    const data = await res.json();
    console.log("me", data);

    setSeries(data.results);
  };

  useEffect(() => {
    fetchSeries();
  }, []);
  return (
    <>
      <h1 className="text-white font-bold text-[45px] px-5 py-10">Series</h1>
      <div className="px-[20px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-[50px]">
        {series.map((seriesItem, id) => (
          <SeriesCard key={id} series={seriesItem} />
        ))}
      </div>
    </>
  );
};

export default Series;
