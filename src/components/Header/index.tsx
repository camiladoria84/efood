import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/fundo.png'

import {
    HeaderContainer,
    HeaderContent,
    LinkHome,
    Logo,
    CartButton
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'

const Header = () => {
    const dispatch = useDispatch()

    const itemsCount = useSelector(
        (state: RootReducer) => state.cart.items.length
    )

    const openCart = () => {
        dispatch(open())
    }

    return (
        <HeaderContainer style={{ backgroundImage: `url(${bannerImg})` }}>
        <HeaderContent>
            <LinkHome to="/">Restaurantes</LinkHome>

            <Logo src={logo} alt="efood" />

            <CartButton type="button" onClick={openCart}>
            {itemsCount} produto(s) no carrinho
            </CartButton>
        </HeaderContent>
        </HeaderContainer>
    )
}

export default Header
