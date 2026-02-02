import { useDispatch, useSelector } from 'react-redux'


import type { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import CartItems from './CartItems'
import Delivery from './Delivery'
import Payment from './Payment'
import Confirmation from './Confirmation'

import * as S from './styles'

const Cart = () => {
    const { isOpen, step } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    if (!isOpen) return null

    return (
        <S.CartContainer>
            <S.Overlay onClick={() => dispatch(close())} />

            <S.Sidebar onClick={(e) => e.stopPropagation()}>
                {step === 'cart' && <CartItems />}
                {step === 'delivery' && <Delivery />}
                {step === 'payment' && <Payment />}
                {step === 'confirmation' && <Confirmation />}
            </S.Sidebar>
        </S.CartContainer>
    )
}

export default Cart
