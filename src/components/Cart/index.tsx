import Button from '../Button'
import trashIcon from '../../assets/images/lixo.png'

import {
    Overlay,
    CartContainer,
    Sidebar,
    Prices,
    CartItem
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const formatPrice = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    if (!isOpen) return null

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () =>
        items.reduce((total, item) => total + item.preco, 0)

    return (
        <CartContainer onClick={closeCart}>
            <Overlay />

            <Sidebar onClick={(e) => e.stopPropagation()}>
                <ul>
                {items.map((item) => (
                    <CartItem key={item.id}>
                        <img src={item.image} alt={item.title} />

                        <div>
                            <h3>{item.title}</h3>
                            <span>{formatPrice(item.preco)}</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => removeItem(item.id)}
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
                    onClick={closeCart}
                />
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
