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
    align-items: center;
    height: 186px;
    padding: 0 16px; 
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 40px 16px;
    }
`

export const Logo = styled.img`
    width: 125px;
    height: 57.5px;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1024px;
    position: relative;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        
        .container {
            flex-direction: column;
            gap: 24px;
        }
    }
`

export const LinkHome = styled(Link)`
    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelho};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const CartButton = styled.button`
    background: none;
    border: none;
    padding: 0;

    font-size: 18px;
    font-weight: 900;
    color: ${cores.vermelho};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
