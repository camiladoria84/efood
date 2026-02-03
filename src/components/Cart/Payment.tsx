import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import type { RootReducer } from '../../store'
import {
    backToDelivery,
    openConfirmation,
    setOrderId
} from '../../store/reducers/cart'

import { useCreateOrderMutation } from '../../services/api'
import formatPrice from '../../utils/formatPrice'
import Button from '../Button'

import * as S from './styles'

type PaymentFormValues = {
    cardName: string
    cardNumber: string
    cvv: string
    expMonth: string
    expYear: string
}

const Payment = () => {
    const dispatch = useDispatch()
    const { items, delivery } = useSelector(
        (state: RootReducer) => state.cart
    )

    const [createOrder, { isLoading }] = useCreateOrderMutation()

    const totalPrice = items.reduce(
        (total, item) => total + item.price,
        0
    )

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

    const form = useFormik<PaymentFormValues>({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            expMonth: '',
            expYear: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await createOrder({
                    products: items.map((item) => ({
                        id: item.id,
                        price: item.price
                    })),
                    delivery: {
                        receiver: delivery.receiver,
                        address: {
                            description: delivery.address,
                            city: delivery.city,
                            zipCode: delivery.zipCode,
                            number: delivery.number,
                            complement: delivery.complement
                        }
                    },
                    payment: {
                        card: {
                            name: values.cardName,
                            number: values.cardNumber,
                            code: values.cvv,
                            expires: {
                                month: values.expMonth,
                                year: values.expYear
                            }
                        }
                    }
                }).unwrap()

                dispatch(setOrderId(response.orderId))

                dispatch(openConfirmation())
            } catch (error) {
                console.error('Erro ao criar pedido', error)
            }
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
                            className={
                                form.touched.cardName && form.errors.cardName
                                    ? 'error'
                                    : ''
                            }
                        />
                        {form.touched.cardName &&
                            form.errors.cardName && (
                                <small>{form.errors.cardName}</small>
                            )}
                    </S.InputGroup>
                </S.Row>

                <S.Row>
                    <S.InputMedium>
                        <label htmlFor="cardNumber">
                            Número do cartão
                        </label>
                        <IMaskInput
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            mask="0000.0000.0000.0000"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                                form.touched.cardNumber &&
                                    form.errors.cardNumber
                                    ? 'error'
                                    : ''
                            }
                        />
                        {form.touched.cardNumber &&
                            form.errors.cardNumber && (
                                <small>
                                    {form.errors.cardNumber}
                                </small>
                            )}
                    </S.InputMedium>

                    <S.InputSmall>
                        <label htmlFor="cvv">CVV</label>
                        <IMaskInput
                            id="cvv"
                            name="cvv"
                            type="text"
                            mask="000"
                            value={form.values.cvv}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                                form.touched.cvv && form.errors.cvv
                                    ? 'error'
                                    : ''
                            }
                        />
                        {form.touched.cvv && form.errors.cvv && (
                            <small>{form.errors.cvv}</small>
                        )}
                    </S.InputSmall>
                </S.Row>

                <S.Row>
                    <S.InputSmall>
                        <label htmlFor="expMonth">
                            Mês de vencimento
                        </label>
                        <IMaskInput
                            id="expMonth"
                            name="expMonth"
                            type="text"
                            mask="00"
                            value={form.values.expMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                                form.touched.expMonth && form.errors.expMonth
                                    ? 'error'
                                    : ''
                            }
                        />
                        {form.touched.expMonth &&
                            form.errors.expMonth && (
                                <small>
                                    {form.errors.expMonth}
                                </small>
                            )}
                    </S.InputSmall>

                    <S.InputSmall>
                        <label htmlFor="expYear">
                            Ano de vencimento
                        </label>
                        <IMaskInput
                            id="expYear"
                            name="expYear"
                            type="text"
                            mask="00"
                            value={form.values.expYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                                form.touched.expYear && form.errors.expYear
                                    ? 'error'
                                    : ''
                            }
                        />
                        {form.touched.expYear &&
                            form.errors.expYear && (
                                <small>
                                    {form.errors.expYear}
                                </small>
                            )}
                    </S.InputSmall>
                </S.Row>

                <S.Buttons>
                    <Button
                        color="light"
                        type="submit"
                        title={
                            isLoading
                                ? 'Finalizando pagamento...'
                                : 'Finalizar o pagamento'
                        }
                        disabled={!form.isValid || isLoading}
                    />

                    <Button
                        color="light"
                        type="button"
                        title="Voltar para o endereço"
                        onClick={() =>
                            dispatch(backToDelivery())
                        }
                    />
                </S.Buttons>
            </form>
        </>
    )
}

export default Payment
