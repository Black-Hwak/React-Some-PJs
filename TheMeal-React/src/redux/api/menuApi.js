import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const menuApi = createApi({
    reducerPath: "menuApi",
    baseQuery: fetchBaseQuery({baseUrl: `https://www.themealdb.com/api/json/v1/1`}),
    tagTypes: ['menuApi'],
    endpoints: (builder) =>({
        getAllMenus: builder.query({
            query: ()=> '/filter.php?a=Canadian',
            providesTags:['menuApi']
        }),
        getSingleMenu: builder.query({
            query: ({idMeal}) => `/lookup.php?i=${idMeal}`,
            providesTags: ['menuApi']
        })
    })
})

export const {useGetAllMenusQuery, useGetSingleMenuQuery} = menuApi;