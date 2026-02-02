import { useDispatch } from 'react-redux'

import { add } from '../../store/reducers/cart'
import Food from '../../models/Food'
import Button from '../Button'

import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'


export type ModalProps = {
    open: boolean
    onClose: () => void
    image: string
    title: string
    description: string
    porcao?: string
    preco?: number
}

const formatPrice = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)

const Modal = ({
    open,
    onClose,
    image,
    title,
    description,
    porcao,
    preco
    }: ModalProps) => {
    const dispatch = useDispatch()

    if (!open) return null

    const handleAddToCart = () => {
        const food = new Food(
        Date.now(),          // id
        title,
        description,
        image,
        '',                  // category (não usada no carrinho)
        false,               // destaque
        0,                   // score
        porcao ?? '',
        preco ?? 0
        )

        dispatch(add(food))
        onClose()
    }

    return (
        <S.Overlay onClick={onClose}>
            <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                <S.CloseButton onClick={onClose}>
                <img src={closeIcon} alt="Fechar" />
                </S.CloseButton>

                <S.ModalImage src={image} alt={title} />

                <S.ModalContent>
                <S.ModalTitle>{title}</S.ModalTitle>

                <S.ModalDescription>
                    {description}
                    {porcao && (
                    <>
                        <br />
                        <br />
                        <strong>Serve:</strong> {porcao}
                    </>
                    )}
                </S.ModalDescription>

                <S.ModalActions>
                    <Button
                    color="light"
                    title={
                        preco
                        ? `Adicionar ao carrinho - ${formatPrice(preco)}`
                        : 'Adicionar ao carrinho'
                    }
                    onClick={handleAddToCart}
                    />
                </S.ModalActions>
                </S.ModalContent>
            </S.ModalContainer>
        </S.Overlay>
    )
}

export default Modal
