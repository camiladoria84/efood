import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export type MenuItem = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}

export type Restaurant = {
    id: number
    titulo: string
    descricao: string
    tipo: string
    capa: string
    avaliacao: number
    destacado: boolean
    cardapio: MenuItem[]
}

const api = createApi({
    reducerPath: 'efoodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood/'
    }),
    endpoints: (builder) => ({
    
        getRestaurants: builder.query<Restaurant[], void>({
        query: () => 'restaurantes'
        }),

        getRestaurant: builder.query<Restaurant, string>({
        query: (id) => `restaurantes/${id}`
        })
    })
})


export const {
    useGetRestaurantsQuery,
    useGetRestaurantQuery
} = api

export default api
