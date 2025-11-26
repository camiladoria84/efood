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

    const Modal = ({ open, onClose, image, title, description, portion, price }: ModalProps) => {
    if (!open) return null

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
                {portion && (
                <>
                    <br />
                    <br />
                    <strong>Serve:</strong> {portion}
                </>
                )}
            </ModalDescription>

            <ModalActions>
                <Button
                color="light"
                title={
                    price
                    ? `Adicionar ao carrinho - ${formatPrice(price)}`
                    : 'Adicionar ao carrinho'
                }
                onClick={onClose}
                />
            </ModalActions>
            </ModalContent>
        </ModalContainer>
        </Overlay>
    )
}

export default Modal
