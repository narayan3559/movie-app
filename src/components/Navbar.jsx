import React, { useState } from 'react'
import { addMovieToList, handleMovieSearch } from '../actions/action'

export const Navbar = (props) => {
  const [searchText, setSearchText] = useState("")
  const { result: movie, showSearchResults } = props.search

  const handleAddToMovies = (movie) => {
    props.dispatch(addMovieToList(movie))
    setSearchText("")
  }
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  const handleSearch = () => {
    props.dispatch(handleMovieSearch(searchText))
  }
  return (
    <div className='nav'>
      <div className='search-container'>
        <input value={searchText} onChange={handleChange} />
        <button id='search-btn' onClick={handleSearch}>Search</button>
        {showSearchResults &&
          <div className='search-results'>
            <div className='search-result'>
              <img src={movie.Poster} alt='Search Poster' />
              <div className='movie-info'>
                <span>{movie.Title}</span>
                <span>{movie.Genre}</span>
                <button onClick={() => handleAddToMovies(movie)}>Add To Movies</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
