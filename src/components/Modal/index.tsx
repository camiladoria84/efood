import {
    Overlay,
    ModalContainer,
    ModalImage,
    ModalContent,
    ModalTitle,
    ModalDescription,
    CloseButton,
    ModalActions
} from './styles'

import closeIcon from '../../assets/images/fechar.png'
import Button from '../Button'

import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'
import Food from '../../models/Food'

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
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                <img src={closeIcon} alt="Fechar" />
                </CloseButton>

                <ModalImage src={image} alt={title} />

                <ModalContent>
                <ModalTitle>{title}</ModalTitle>

                <ModalDescription>
                    {description}
                    {porcao && (
                    <>
                        <br />
                        <br />
                        <strong>Serve:</strong> {porcao}
                    </>
                    )}
                </ModalDescription>

                <ModalActions>
                    <Button
                    color="light"
                    title={
                        preco
                        ? `Adicionar ao carrinho - ${formatPrice(preco)}`
                        : 'Adicionar ao carrinho'
                    }
                    onClick={handleAddToCart}
                    />
                </ModalActions>
                </ModalContent>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal
