import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CartItem } from '../../models/CartItem'

type CartState = {
    items: CartItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload)
        state.isOpen = true
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
        }
    }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
