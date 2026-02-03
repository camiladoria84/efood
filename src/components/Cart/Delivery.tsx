import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import {
    backToCart,
    openPayment,
    setDelivery
} from '../../store/reducers/cart'
import Button from '../Button'

import * as S from './styles'

type DeliveryFormValues = {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: string
    complement: string
}

const Delivery = () => {
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        receiver: Yup.string()
            .min(3, 'Nome muito curto')
            .required('Campo obrigatório'),
        address: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        zipCode: Yup.string()
            .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
            .required('Campo obrigatório'),
        number: Yup.string().required('Campo obrigatório'),
        complement: Yup.string()
    })

    // máscara manual de CEP
    const handleZipCodeChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: string) => void
    ) => {
        let value = e.target.value.replace(/\D/g, '')

        if (value.length > 8) {
            value = value.slice(0, 8)
        }

        if (value.length > 5) {
            value = value.replace(/^(\d{5})(\d)/, '$1-$2')
        }

        setFieldValue('zipCode', value)
    }

    // apenas números para o campo número
    const handleNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (field: string, value: string) => void
    ) => {
        const value = e.target.value.replace(/\D/g, '')
        setFieldValue('number', value)
    }

    return (
        <>
            <S.Title>Entrega</S.Title>

            <Formik<DeliveryFormValues>
                initialValues={{
                    receiver: '',
                    address: '',
                    city: '',
                    zipCode: '',
                    number: '',
                    complement: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    dispatch(setDelivery(values))
                    dispatch(openPayment())
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isValid,
                    setFieldValue
                }) => (
                    <Form>
                        <S.Row>
                            <S.InputGroup>
                                <label htmlFor="receiver">Quem irá receber</label>
                                <input
                                    id="receiver"
                                    name="receiver"
                                    type="text"
                                    value={values.receiver}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        touched.receiver && errors.receiver
                                            ? 'error'
                                            : ''
                                    }
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
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        touched.address && errors.address
                                            ? 'error'
                                            : ''
                                    }
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
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        touched.city && errors.city
                                            ? 'error'
                                            : ''
                                    }
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
                                    value={values.zipCode}
                                    onChange={(e) =>
                                        handleZipCodeChange(e, setFieldValue)
                                    }
                                    onBlur={handleBlur}
                                    placeholder="00000-000"
                                    className={
                                        touched.zipCode && errors.zipCode
                                            ? 'error'
                                            : ''
                                    }
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
                                    value={values.number}
                                    onChange={(e) =>
                                        handleNumberChange(e, setFieldValue)
                                    }
                                    onBlur={handleBlur}
                                    className={
                                        touched.number && errors.number
                                            ? 'error'
                                            : ''
                                    }
                                />
                                {touched.number && errors.number && (
                                    <small>{errors.number}</small>
                                )}
                            </S.InputSmall>
                        </S.Row>

                        <S.Row>
                            <S.InputGroup>
                                <label htmlFor="complement">
                                    Complemento (opcional)
                                </label>
                                <input
                                    id="complement"
                                    name="complement"
                                    type="text"
                                    value={values.complement}
                                    onChange={handleChange}
                                />
                            </S.InputGroup>
                        </S.Row>

                        <S.Buttons>
                            <Button
                                type="submit"
                                color="light"
                                title="Continuar com o pagamento"
                                disabled={!isValid}
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
