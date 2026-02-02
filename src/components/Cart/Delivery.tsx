import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'


import { backToCart, openPayment } from '../../store/reducers/cart'
import Button from '../Button'

import * as S from './styles'

const Delivery = () => {
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        receiver: Yup.string()
            .min(3, 'Nome muito curto')
            .required('Campo obrigatório'),
        address: Yup.string()
            .required('Campo obrigatório'),
        city: Yup.string()
            .required('Campo obrigatório'),
        zipCode: Yup.string()
            .matches(/^\d{5}-?\d{3}$/, 'CEP inválido')
            .required('Campo obrigatório'),
        number: Yup.string()
            .required('Campo obrigatório'),
        complement: Yup.string() // opcional
    })

    return (
        <>
            <S.Title>Entrega</S.Title>

            <Formik
                initialValues={{
                    receiver: '',
                    address: '',
                    city: '',
                    zipCode: '',
                    number: '',
                    complement: ''
                }}
                validationSchema={validationSchema}
                onSubmit={() => {
                    dispatch(openPayment())
                }}
            >
                {({ errors, touched, handleChange, handleBlur, isValid }) => (
                    <Form>
                        <S.Row>
                            <S.InputGroup>
                                <label htmlFor="receiver">Quem irá receber</label>
                                <input
                                    id="receiver"
                                    name="receiver"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.receiver && errors.receiver && (
                                    <small>{errors.receiver}</small>
                                )}
                            </S.InputGroup>
                        </S.Row>
                        <S.Row>
                            <S.InputGroup>
                                <label htmlFor="address">Endereço</label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.address && errors.address && (
                                    <small>{errors.address}</small>
                                )}
                            </S.InputGroup>
                        </S.Row>
                        <S.Row>
                            <S.InputGroup>
                                <label htmlFor="city">Cidade</label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.city && errors.city && (
                                    <small>{errors.city}</small>
                                )}
                            </S.InputGroup>
                        </S.Row>
                        <S.Row>
                            <S.InputSmall>
                                <label htmlFor="zipCode">CEP</label>
                                <input
                                    id="zipCode"
                                    name="zipCode"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.zipCode && errors.zipCode && (
                                    <small>{errors.zipCode}</small>
                                )}
                            </S.InputSmall>

                            <S.InputSmall>
                                <label htmlFor="number">Número</label>
                                <input
                                    id="number"
                                    name="number"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.number && errors.number && (
                                    <small>{errors.number}</small>
                                )}
                            </S.InputSmall>
                        </S.Row>

                        <S.Row>
                            <S.InputGroup>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                <input
                                    id="complement"
                                    name="complement"
                                    type="text"
                                    onChange={handleChange}
                                />
                            </S.InputGroup>
                        </S.Row>

                        <S.Buttons>
                            <Button
                                type="submit"
                                color="light"
                                title="Continuar com o pagamento"
                                disabled={!isValid} // só habilita quando válido
                            />
                            <Button
                                type="button"
                                color="light"
                                title="Voltar para o carrinho"
                                onClick={() => dispatch(backToCart())}
                            />
                        </S.Buttons>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Delivery
