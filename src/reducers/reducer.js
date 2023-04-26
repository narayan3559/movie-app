import { combineReducers } from "redux"
import { ADD_MOVIES, 
         ADD_FAVOURITE, 
         REMOVE_FAVOURITE, 
         SET_SHOW_FAVOURITE, 
         ADD_MOVIE_TO_LIST, 
         ADD_SEARCH_RESULT 
       } from "../actions/action"

const initialMoiviesState = {
  list: [],
  favourite: [],
  showFavourite: false
}

const initialSearchState = {
  result: {},
  showSearchResults: false
}

export function movies(state = initialMoiviesState, faction) {
  switch (faction.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: faction.movies
      }
    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: [faction.movie, ...state.favourite]
      }
    case REMOVE_FAVOURITE:
      const filteredArray = state.favourite.filter(
        movie => movie.Title !== faction.movie.Title
      )
      return {
        ...state,
        favourite: filteredArray
      }
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourite: faction.value
      }
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [faction.movie, ...state.list]
      }
    default:
      return state
  }
}

export function search(state = initialSearchState, action) {
  switch(action.type){
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true
      }
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false
      }
    default:
      return state
  }
}

export const rootReducer = {
  movies: initialMoiviesState,
  search: initialSearchState
}

export default combineReducers({ movies, search })