import React, { useState, createContext, useEffect } from 'react'



export const bookmarkContext= createContext({})

const BookmarkContext = ({children}) => {
    const [bookmarkMovies, setBookmarkMovies] = useState([])

    const getMovies = ()=>{
        const getMoviesFromLS = JSON.parse(localStorage.getItem("bookmarks"))
      if(getMoviesFromLS){
        setBookmarkMovies(getMoviesFromLS)
      }
    }

    const addMovies = (movie)=>{
        const getMoviesFromLS = JSON.parse(localStorage.getItem("bookmarks"))
        console.log("TRhis is the get", getMoviesFromLS)
        if(getMoviesFromLS){
            const newMovies = getMoviesFromLS.filter((item)=>item.id !== movie.id)
            localStorage.setItem("bookmarks", JSON.stringify([...newMovies, movie]))
            getMovies()
            
        }else{
            
            localStorage.setItem("bookmarks", JSON.stringify([movie]))
            getMovies()
        }
    }

    const removeMovie = (movie)=>{
        const getMoviesFromLS = JSON.parse(localStorage.getItem("bookmarks")) //Get items from localstorage and parse to js
        const filterMovie = getMoviesFromLS.filter((item)=>item.id !== movie.id) // filter out the movie that is to be removed
   
        localStorage.setItem("bookmarks", JSON.stringify(filterMovie) ) //update the LS
        getMovies()
    }

    useEffect(()=>{
        getMovies()
    },[])


  return (
    <bookmarkContext.Provider value={{
      addMovies,
      bookmarkMovies,
      removeMovie  
    }}>{children}</bookmarkContext.Provider>
  )
}

export default BookmarkContext