import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../api/movieApi";
import movieReducer from "./movieSlice";

export const store = configureStore({
    reducer: {
     [movieApi.reducerPath] : movieApi.reducer,
     movie: movieReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware),
});
