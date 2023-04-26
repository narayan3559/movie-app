import React from 'react'
import { addFavourite, removeFavourite } from '../actions/action'

export const MovieCard = (props) => {
  const { movie, isFavourite } = props
  const handleFavouriteBtn = () => {
    props.dispatch(addFavourite(movie))
  }
  const handleunFavouriteBtn = ()=>{
    props.dispatch(removeFavourite(movie))
  }
  return (
    <div className='movie-card'>
      <div className='left'>
        <img alt='movie-poster' src={movie.Poster} />
      </div>
      <div className='right'>
        <div className='title'>{movie.Title} ({movie.Year})</div>
        <div className='language'>Language : {movie.Language}</div>
        <div className='plot'>{movie.Plot}</div>
        <div className='language'>Awards : {movie.Awards}</div>
        <div className='footer'>
          <div className='rating'>IMDB : {movie.imdbRating}</div>
          <div className='rating'>Runtime : {movie.Runtime}</div>
          <div className='rating'>Rated : {movie.Rated}</div>
          <div className='rating'>BoxOffice : {movie.BoxOffice}</div>
          {
            isFavourite
            ? <button className='unfavourite-btn' onClick={handleunFavouriteBtn}>Unfavourite</button>
            : <button className='favourite-btn' onClick={handleFavouriteBtn}>Add to Favourite</button>
          }
        </div>
      </div>
    </div>
  )
}