import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import {
    backToDelivery,
    openConfirmation
} from '../../store/reducers/cart'

import {
    Title,
    Row,
    InputGroup,
    InputMedium,
    InputSmall,
    Buttons
} from './styles'

import formatPrice from '../../utils/formatPrice'

const Payment = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const totalPrice = items.reduce(
        (total, item) => total + item.preco,
        0
    )

    return (
        <>
            <Title>
                Pagamento - Valor a pagar {formatPrice(totalPrice)}
            </Title>

            <Row>
                <InputGroup>
                    <label htmlFor="cardName">Nome no Cartão</label>
                    <input id="cardName" type="text" />
                </InputGroup>
            </Row>

            <Row>
                <InputMedium>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input id="cardNumber" type="text" />
                </InputMedium>
                <InputSmall>
                    <label htmlFor="cvv">CVV</label>
                    <input id="cvv" type="text" />
                </InputSmall>
            </Row>

            <Row>
                <InputSmall>
                    <label htmlFor="expMonth">Mês de vencimento</label>
                    <input id="expMonth" type="text" />
                </InputSmall>
                <InputSmall>
                    <label htmlFor="expYear">Ano de vencimento</label>
                    <input id="expYear" type="text" />
                </InputSmall>
            </Row>

            <Buttons>
                <Button
                    color="light"
                    title="Finalizar o pagamento"
                    onClick={() => dispatch(openConfirmation())}
                />
                <Button
                    color="light"
                    title="Voltar para o endereço"
                    onClick={() => dispatch(backToDelivery())}
                />
            </Buttons>
        </>
    )
}

export default Payment
