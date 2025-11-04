
import logo from '../../assets/images/logo.png'
import { CartLink, HeaderContainer, HeaderContent, LinkHome, Logo } from './styles'
import bannerImg from '../../assets/images/fundo.png'

type Props = {
    cartCount?: number
}

const Header = ({ cartCount = 0 }: Props) => (
    <HeaderContainer style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderContent>
            <LinkHome to="/">Restaurantes</LinkHome>
            <Logo src={logo} alt="efood" />
            <CartLink to="/carrinho">{cartCount} produto(s) no carrinho</CartLink>
        </HeaderContent>
    </HeaderContainer>
)
export default Header
