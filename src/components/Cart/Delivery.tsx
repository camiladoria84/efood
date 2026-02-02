import Button from '../Button'
import { useDispatch } from 'react-redux'
import { backToCart, openPayment } from '../../store/reducers/cart'

import {
    Title,
    Row,
    InputGroup,
    InputSmall,
    Buttons
} from './styles'

const Delivery = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Title>Entrega</Title>
            <Row>
                <InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input id="receiver" type="text" />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input id="address" type="text" />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input id="city" type="text" />
                </InputGroup>
            </Row>
            <Row>
                <InputSmall>
                    <label htmlFor="zipCode">CEP</label>
                    <input id="zipCode" type="text" />
                </InputSmall>
                <InputSmall>
                    <label htmlFor="number">Número</label>
                    <input id="number" type="text" />
                </InputSmall>
            </Row>
            <Row>
                <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input id="complement" type="text" />
                </InputGroup>
            </Row>
            <Buttons>
                <Button
                    color="light"
                    title="Continuar com o pagamento"
                    onClick={() => dispatch(openPayment())}
                />
                <Button
                    color="light"
                    title="Voltar para o carrinho"
                    onClick={() => dispatch(backToCart())}
                />
            </Buttons>
        </>
    )
}

export default Delivery
