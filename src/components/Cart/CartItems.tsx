import { useDispatch, useSelector } from 'react-redux'

import trashIcon from '../../assets/images/lixo.png'
import { remove, openDelivery } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'
import formatPrice from '../../utils/formatPrice'

import Button from '../Button'

import { Prices, CartItem, EmptyCartMessage } from './styles'



const CartItems = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const getTotalPrice = () =>
        items.reduce((total, item) => total + item.price, 0)

    if (items.length === 0) {
        return (
            <EmptyCartMessage>
                O carrinho está vazio, adicione pelo menos um item para continuar com a compra.
            </EmptyCartMessage>
        )
    }

    return (
        <>
            <ul>
                {items.map((item) => (
                    <CartItem key={item.id}>
                        <img src={item.image} alt={item.title} />

                        <div>
                            <h3>{item.title}</h3>
                            <span>{formatPrice(item.price)}</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => dispatch(remove(item.id))}
                            aria-label="Remover item"
                        >
                            <img src={trashIcon} alt="Remover" />
                        </button>
                    </CartItem>
                ))}
            </ul>

            <Prices>
                <span>Valor total</span>
                <span>{formatPrice(getTotalPrice())}</span>
            </Prices>

            <Button
                color="light"
                title="Continuar com a entrega"
                onClick={() => dispatch(openDelivery())}
            />
        </>
    )
}

export default CartItems