import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import type { RootReducer } from '../../store'
import { backToDelivery, openConfirmation } from '../../store/reducers/cart'
import formatPrice from '../../utils/formatPrice'
import Button from '../Button'

import * as S from './styles'



const Payment = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const totalPrice = items.reduce((total, item) => total + item.preco, 0)

    const validationSchema = Yup.object({
        cardName: Yup.string()
            .min(3, 'Nome muito curto')
            .required('Campo obrigatório'),
        cardNumber: Yup.string()
            .min(16, 'Número do cartão inválido')
            .required('Campo obrigatório'),
        cvv: Yup.string()
            .min(3, 'CVV inválido')
            .required('Campo obrigatório'),
        expMonth: Yup.string()
            .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
            .required('Campo obrigatório'),
        expYear: Yup.string()
            .matches(/^\d{2}$/, 'Ano inválido')
            .required('Campo obrigatório')
    })

    const form = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            expMonth: '',
            expYear: ''
        },
        validationSchema,
        onSubmit: () => {
            dispatch(openConfirmation())
        }
    })

    return (
        <>
            <S.Title>
                Pagamento - Valor a pagar {formatPrice(totalPrice)}
            </S.Title>

            <form onSubmit={form.handleSubmit}>
                <S.Row>
                    <S.InputGroup>
                        <label htmlFor="cardName">Nome no Cartão</label>
                        <input
                            id="cardName"
                            name="cardName"
                            type="text"
                            value={form.values.cardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        {form.touched.cardName && form.errors.cardName && (
                            <small>{form.errors.cardName}</small>
                        )}
                    </S.InputGroup>
                </S.Row>

                <S.Row>
                    <S.InputMedium>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        {form.touched.cardNumber && form.errors.cardNumber && (
                            <small>{form.errors.cardNumber}</small>
                        )}
                    </S.InputMedium>

                    <S.InputSmall>
                        <label htmlFor="cvv">CVV</label>
                        <input
                            id="cvv"
                            name="cvv"
                            type="text"
                            value={form.values.cvv}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        {form.touched.cvv && form.errors.cvv && (
                            <small>{form.errors.cvv}</small>
                        )}
                    </S.InputSmall>
                </S.Row>

                <S.Row>
                    <S.InputSmall>
                        <label htmlFor="expMonth">Mês de vencimento</label>
                        <input
                            id="expMonth"
                            name="expMonth"
                            type="text"
                            value={form.values.expMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        {form.touched.expMonth && form.errors.expMonth && (
                            <small>{form.errors.expMonth}</small>
                        )}
                    </S.InputSmall>

                    <S.InputSmall>
                        <label htmlFor="expYear">Ano de vencimento</label>
                        <input
                            id="expYear"
                            name="expYear"
                            type="text"
                            value={form.values.expYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                        {form.touched.expYear && form.errors.expYear && (
                            <small>{form.errors.expYear}</small>
                        )}
                    </S.InputSmall>
                </S.Row>

                <S.Buttons>
                    <Button
                        color="light"
                        type="submit"
                        title="Finalizar o pagamento"
                        disabled={!form.isValid}
                    />

                    <Button
                        color="light"
                        type="button"
                        title="Voltar para o endereço"
                        onClick={() => dispatch(backToDelivery())}
                    />
                </S.Buttons>
            </form>
        </>
    )
}

export default Payment
