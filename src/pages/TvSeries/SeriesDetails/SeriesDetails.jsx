import React from 'react'
import { getImage } from '../../../Components/lib/constant';

const SeriesDetails = ({movie}) => {
  const {backdrop_path, poster_path, original_name, overview, genres} = movie;
  console.log(movie)
  return (
    
      <div className='py-10 md:py-20 flex flex-col lg:flex-row items-center text-white'>
        <img src={getImage(backdrop_path || poster_path)} alt="" className='w-full h-[50vh] md:w-[800px] md:h-[70vh] object-cover'/>
      <div className='px-[20px] flex flex-col items-center lg:items-start pt-[20px]'>
        <h3 className='text-[25px] pb-[10px] font-bold'>{original_name}</h3>
        <p className="text-center lg:text-start pb-[10px]">{overview}</p>
        <div className="flex items-center gap-2 font-bold">
          Genre: {genres?.map((genre) => (
            <span className='text-green-500 font-normal'>{genre.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeriesDetails