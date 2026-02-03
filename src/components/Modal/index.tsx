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
    portion?: string
    price?: number
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
    portion,
    price
    }: ModalProps) => {
    const dispatch = useDispatch()

    if (!open) return null

    const handleAddToCart = () => {
        const food = new Food(
        Date.now(),         
        title,
        description,
        image,
        '',                  
        false,               
        0,                   
        portion ?? '',
        price ?? 0
        )

        dispatch(
            add({
                id: food.id,
                title: food.title,
                description: food.description,
                image: food.image,
                price: food.price,
                portion: food.portion
            })
            )
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
                    {portion && (
                    <>
                        <br />
                        <br />
                        <strong>Serve:</strong> {portion}
                    </>
                    )}
                </S.ModalDescription>

                <S.ModalActions>
                    <Button
                    color="light"
                    title={
                        price
                        ? `Adicionar ao carrinho - ${formatPrice(price)}`
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
