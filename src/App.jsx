import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'

import Bookmark from './pages/Bookmark/Bookmark'
import MovieDetails from './pages/Movies/MovieDetails/MovieDetails'
import SeriesDetails from './pages/TvSeries/SeriesDetails/SeriesDetails'
import Nav from './Components/Nav/Nav'
import Search from './pages/Search/Search'
import '@splidejs/react-splide/css';
import Movies from './pages/Movies/Movies'
import Series from './pages/TvSeries/Series'
// import Nav from './Components/Nav/nav'

function App() {
  

  return (
    <div className='flex flex-col lg:flex-row w-full'>
      
      <Nav/>
     <div className='flex-1'>
     <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path= '/movies' element={null}>
              <Route index element={<Movies/>} />
              <Route path='/movies/:id' element={<MovieDetails/>} />
          </Route>
          <Route path='/series' element={null}>
            <Route index element={<Series/>} />
              <Route path=':id' element={<SeriesDetails/>} />
          </Route>  
          <Route path='/bookmark' element={<Bookmark/>} />
          <Route path='/search/:slug' element={<Search/>} />
      </Routes>
     </div>
    </div>
  )
}

export default App
