import { configureStore } from "@reduxjs/toolkit";
import { menuApi } from "../api/menuApi";

export const store = configureStore({
    reducer: {
     [menuApi.reducerPath] : menuApi.reducer,
    //  movie: movieReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(menuApi.middleware),
});
