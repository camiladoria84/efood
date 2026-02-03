import { useDispatch, useSelector } from 'react-redux'

import type { RootReducer } from '../../store'
import Button from '../Button'
import { clear } from '../../store/reducers/cart'

import { Title, Buttons } from './styles'

const Confirmation = () => {
    const dispatch = useDispatch()
    const orderId = useSelector(
        (state: RootReducer) => state.cart.orderId
    )

    return (
        <>
            <Title>
                Pedido realizado
                {orderId && ` - ${orderId}`}
            </Title>

            <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
            </p>

            <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
            </p>

            <p>
                Esperamos que desfrute de uma deliciosa e agradável
                experiência gastronômica. Bom apetite!
            </p>

            <Buttons>
                <Button
                    color="light"
                    title="Concluir"
                    onClick={() => dispatch(clear())}
                />
            </Buttons>
        </>
    )
}

export default Confirmation
