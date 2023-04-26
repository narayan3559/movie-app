import React, { useEffect, useState } from 'react'
import { data } from '../data'
import { Navbar } from './Navbar'
import { MovieCard } from './MovieCard'
import { addMovies, setShowFavourite } from '../actions/action'

function App(props) {
  const { store } = props
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = props.store.subscribe(() => {
      setState(store.getState());
    });

    store.dispatch(addMovies(data));

    return unsubscribe;
  }, [store]);

  const isFavourite = (movie) => {
    const { movies } = props.store.getState();
    const index = movies.favourite.indexOf(movie);
    return index !== -1;
  }

  const onChangeTab = (value) => {
    store.dispatch(setShowFavourite(value));
  }

  const { movies, search } = store.getState();
  const { list, favourite, showFavourite } = movies;
  // console.log("State Render", store.getState());
  const displayMovies = showFavourite ? favourite : list;

  return (
    <div className="App">
      <Navbar dispatch={store.dispatch} search={search} />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavourite ? "" : "active-tabs"}`}
            onClick={() => onChangeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavourite ? "active-tabs" : ""}`}
            onClick={() => onChangeTab(true)}
          >
            Favourites
          </div>
        </div>
        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movies-${index}`}
              dispatch={store.dispatch}
              isFavourite={isFavourite(movie)}
            />
          ))}
        </div>
        {displayMovies.length === 0 ? (
          <h1 className="no-movies">No favourite Movies to show</h1>
        ) : null}
      </div>
    </div>
  );
}

export default App;