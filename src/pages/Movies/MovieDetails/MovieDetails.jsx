import React, { useState, useEffect } from 'react'
import DetailSection from '../../../Components/shared/DetailSection'
import { useParams, useSearchParams } from 'react-router-dom'
import SeriesDetails from '../../TvSeries/SeriesDetails/SeriesDetails';

const MovieDetails = () => {
  const [movie, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([])
  const [searParams] = useSearchParams()

  const type = searParams.get("mediaType")
  let params = useParams();


  console.log(params)

  const fetchMovies = async () => {
    const res = await fetch 
    (`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);

    const data = await res.json();
    console.log("over here", data)
    setMovies(data);
     
  };

  const fetchTvSeries = async () => {
    const res = await fetch 
    (`https://api.themoviedb.org/3/tv/${params.id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)

    const data = await res.json();
    console.log("look ", data)
    setTvSeries(data);
  };

console.log(type)

  useEffect(() => {
    type === "movie" ? fetchMovies() : fetchTvSeries();
  }, []);


  return (
    <>
    {
     type=="movie" ? <DetailSection movie={movie}/> : <SeriesDetails movie={tvSeries}/> 
    }
      
    </>
  )
}

export default MovieDetails