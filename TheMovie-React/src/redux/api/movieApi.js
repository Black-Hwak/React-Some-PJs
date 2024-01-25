import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://api.themoviedb.org/3`}),
    tagTypes: ['movieApi'],
    endpoints: (builder) =>({
        getAllRelated: builder.query({
            query: ()=> '/movie/top_rated?api_key=09a0f21649f8ae89850e3f01aea9e49f&language=en-US',
            providesTags:['movieApi']
        }),
        getPopular: builder.query({
            query: () => '/movie/popular?api_key=09a0f21649f8ae89850e3f01aea9e49f&language=en-US',
            providesTags: ['movieApi']
        }),
        getUpcoming: builder.query({
            query: () => '/movie/upcoming?api_key=09a0f21649f8ae89850e3f01aea9e49f&language=en-US',
            providesTags: ['movieApi']
        }),
        getSingleMovie: builder.query({
            query: ({id}) => `/movie/${id}?api_key=09a0f21649f8ae89850e3f01aea9e49f&language=en-US`,
            providesTags: ['movieApi']
        }),
        getSearchMovie: builder.query({
            query: ({title}) => `/search/movie?api_key=09a0f21649f8ae89850e3f01aea9e49f&language=en-US&query=${title}&page=1&include_adult=false`,
            providesTags: ['movieApi']
        })
    })
})

export const {useGetAllRelatedQuery, useGetPopularQuery, useGetUpcomingQuery, useGetSingleMovieQuery, useGetSearchMovieQuery} = movieApi;