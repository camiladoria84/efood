import {
    Overlay,
    CartContainer,
    Sidebar
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import CartItems from './CartItems'
import Delivery from './Delivery'
import Payment from './Payment'
import Confirmation from './Confirmation'


const Cart = () => {
    const { isOpen, step } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    if (!isOpen) return null

    return (
        <CartContainer>
            <Overlay onClick={() => dispatch(close())} />

            <Sidebar onClick={(e) => e.stopPropagation()}>
                {step === 'cart' && <CartItems />}
                {step === 'delivery' && <Delivery />}
                {step === 'payment' && <Payment />}
                {step === 'confirmation' && <Confirmation />}
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
