import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '../../models/CartItem'

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

type CartState = {
    items: CartItem[]
    isOpen: boolean
    step: CheckoutStep
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    step: 'cart'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
            state.isOpen = true
            state.step = 'cart'
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

        clear: (state) => {
            state.items = []
            state.isOpen = false
            state.step = 'cart'
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
    clear
} = cartSlice.actions

export default cartSlice.reducer
