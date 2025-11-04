import { ButtonContainer } from "./styles"


type Props = {
    color: 'dark' | 'light'
    title: string
    onClick?: () => void
    variant?: 'home' | 'profile'
}

const Button = ({ color, title, onClick, variant = 'home' }: Props) => (
        <ButtonContainer
            color={color}
            onClick={onClick}
            variant={variant}
        >
            {title}
        </ButtonContainer>
)


export default Button
