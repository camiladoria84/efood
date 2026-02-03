import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type MenuItem = {
    id: number
    nome: string
    descricao: string
    foto: string
    price: number
    portion: string
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

/* 🔽 Tipos vindos da API */
type ApiMenuItem = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}

type ApiRestaurant = {
    id: number
    titulo: string
    descricao: string
    tipo: string
    capa: string
    avaliacao: number
    destacado: boolean
    cardapio: ApiMenuItem[]
}

export type OrderProduct = {
    id: number
    price: number
}

export type OrderPayload = {
    products: OrderProduct[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: string
            complement?: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: string
            expires: {
                month: string
                year: string
            }
        }
    }
}

export type OrderResponse = {
    orderId: number
}

const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ?? '/api/efood'

const api = createApi({
    reducerPath: 'efoodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<Restaurant[], void>({
            query: () => 'restaurantes',
            transformResponse: (response: ApiRestaurant[]): Restaurant[] =>
                response.map((restaurant) => ({
                    ...restaurant,
                    cardapio: restaurant.cardapio.map((item) => ({
                        id: item.id,
                        nome: item.nome,
                        descricao: item.descricao,
                        foto: item.foto,
                        price: item.preco,
                        portion: item.porcao
                    }))
                }))
        }),

        getRestaurant: builder.query<Restaurant, string>({
            query: (id) => `restaurantes/${id}`,
            transformResponse: (restaurant: ApiRestaurant): Restaurant => ({
                ...restaurant,
                cardapio: restaurant.cardapio.map((item) => ({
                    id: item.id,
                    nome: item.nome,
                    descricao: item.descricao,
                    foto: item.foto,
                    price: item.preco,
                    portion: item.porcao
                }))
            })
        }),

        createOrder: builder.mutation<OrderResponse, OrderPayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantsQuery,
    useGetRestaurantQuery,
    useCreateOrderMutation
} = api

export default api
