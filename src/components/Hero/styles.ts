import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
    width: 100vw;
    height: 384px;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
        padding: 0 16px;
    }
`

export const LogoImage = styled.img`
    width: 125px;
    height: 57.5px;
    flex-shrink: 0;
    margin-bottom: 64px;
`

export const Title = styled.h2`
    max-width: 539px;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: ${cores.vermelho};
    margin-top: 64px;
`
