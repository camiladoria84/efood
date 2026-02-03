import { ButtonContainer } from "./styles"

type Props = {
    color: 'dark' | 'light'
    title: string
    onClick?: () => void
    variant?: 'home' | 'profile'
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({ color, title, onClick, variant = 'home', disabled, type = 'button' }: Props) => (
    <ButtonContainer
        $color={color}
        onClick={onClick}
        $variant={variant}
        disabled={disabled}
        type={type}
    >
        {title}
    </ButtonContainer>
)

export default Button

