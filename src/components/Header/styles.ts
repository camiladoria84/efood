import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 186px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1366px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    position: relative;
`

export const Logo = styled.img`
    width: 125px;
    height: 57.5px;
    position: absolute;
    top: 63px;
    left: 50%;
    transform: translateX(-50%);
`

export const LinkHome = styled(Link)`
    position: absolute;
    top: 78px; /* centralizado em relação à logo */
    left: 120px;

    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelho};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const CartLink = styled(Link)`
    position: absolute;
    top: 78px;
    right: 120px;

    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelho};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
