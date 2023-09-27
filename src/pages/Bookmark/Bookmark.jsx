import React, { useContext } from 'react'
import { bookmarkContext } from '../../Components/context/BookmarkContext'
import MovieCard from '../../Components/shared/MovieCard'

const Bookmark = () => {
  const {bookmarkMovies} = useContext(bookmarkContext)
  return (
    <div>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-[10px] lg:pl-[30px]">
          {bookmarkMovies.map((movie) => (
            <MovieCard movies={movie} />
          ))}
        </div>
    </div>
  )
}

export default Bookmark