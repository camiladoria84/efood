import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '../../models/CartItem'

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

export type Delivery = {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: string
    complement?: string
}

type CartState = {
    items: CartItem[]
    isOpen: boolean
    step: CheckoutStep
    delivery: Delivery
    orderId?: number
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    step: 'cart',
    delivery: {
        receiver: '',
        address: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
    },
    orderId: undefined
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
            const itemExists = state.items.find(
                (item) => item.id === action.payload.id
            )

            if (!itemExists) {
                // 🔑 CLONE para remover prototype (classe Food)
                state.items.push({ ...action.payload })
            }

            state.isOpen = true
            state.step = 'cart'
            state.orderId = undefined
        },

        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },

        open: (state) => {
            state.isOpen = true
        },

        close: (state) => {
            state.isOpen = false
            state.step = 'cart'
        },

        openDelivery: (state) => {
            state.step = 'delivery'
        },

        openPayment: (state) => {
            state.step = 'payment'
        },

        openConfirmation: (state) => {
            state.step = 'confirmation'
        },

        backToCart: (state) => {
            state.step = 'cart'
        },

        backToDelivery: (state) => {
            state.step = 'delivery'
        },

        setDelivery: (state, action: PayloadAction<Delivery>) => {
            state.delivery = action.payload
        },

        setOrderId: (state, action: PayloadAction<number>) => {
            state.orderId = action.payload
        },

        clear: (state) => {
            state.items = []
            state.isOpen = false
            state.step = 'cart'
            state.delivery = {
                receiver: '',
                address: '',
                city: '',
                zipCode: '',
                number: '',
                complement: ''
            }
            state.orderId = undefined
        }
    }
})

export const {
    add,
    remove,
    open,
    close,
    openDelivery,
    openPayment,
    openConfirmation,
    backToCart,
    backToDelivery,
    setDelivery,
    setOrderId,
    clear
} = cartSlice.actions

export default cartSlice.reducer
