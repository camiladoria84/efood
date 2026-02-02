import Button from '../Button'
import trashIcon from '../../assets/images/lixo.png'
import { Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { remove, openDelivery } from '../../store/reducers/cart'
import formatPrice from '../../utils/formatPrice'

const CartItems = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const getTotalPrice = () =>
        items.reduce((total, item) => total + item.preco, 0)

    return (
        <>
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