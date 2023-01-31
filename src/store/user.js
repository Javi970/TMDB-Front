import { createAction, createReducer } from "@reduxjs/toolkit";
import { message } from 'antd'

export const userLogin = createAction("USER_LOGIN");
export const userLogOut = createAction('USER_LOGOUT')
export const addToFavorites = createAction('ADD_TO_FAVORITES')
export const removeFromFavorites = createAction('REMOVE_FROM_FAVORITES')

const initialState = {
  id: null,
  email: null,
  name: null,
  moviesFav:[]
};

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => action.payload,
  [userLogOut]: (state, action) => (state = {}),
  [addToFavorites]: (state, action) => {
    if (state.moviesFav.find((fav) => fav.id === action.payload.id)) {
      message.error('error:this movie was already added to favorites')
      return state
    }

    message.success('Movie added to favorites')
    return state.moviesFav.push(action.payload)
  },
  [removeFromFavorites]: (state, action) => {
    message.success(`Movie removed from favorites`)
    return {
      ...state,
      moviesFav: state.moviesFav.filter(
        (fav) => fav.id !== action.payload.id,
      ),
    }
  },
})


export default userReducer;