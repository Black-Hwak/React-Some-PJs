import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchWord: '',
    favMovies: []
};



export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
          setSearchWord: (state,{payload})=>{
            state.searchWord = payload
          },
          addFavMovie: (state, {payload}) =>{
            const isMovieExisted = state.favMovies.find(movie => movie.id === payload.id);
            if(isMovieExisted){
              return state
            }else{
              state.favMovies = [...state.favMovies,{...payload}];
            }
          },
          removeFavMovie: (state,{payload})=>{
            state.favMovies = state.favMovies.filter(movie => movie.id !==payload.id)
          }
    }
})

export const {setSearchWord , addFavMovie, removeFavMovie} = movieSlice.actions;
export default movieSlice.reducer;