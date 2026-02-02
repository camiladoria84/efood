import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/fundo.png'

import * as S from './styles'

const Header = () => {
    const dispatch = useDispatch()

    const itemsCount = useSelector(
        (state: RootReducer) => state.cart.items.length
    )

    const openCart = () => {
        dispatch(open())
    }

    return (
        <S.HeaderContainer style={{ backgroundImage: `url(${bannerImg})` }}>
        <S.HeaderContent>
            <S.LinkHome to="/">Restaurantes</S.LinkHome>

            <S.Logo src={logo} alt="efood" />

            <S.CartButton type="button" onClick={openCart}>
            {itemsCount} produto(s) no carrinho
            </S.CartButton>
        </S.HeaderContent>
        </S.HeaderContainer>
    )
}

export default Header
