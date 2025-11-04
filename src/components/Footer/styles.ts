import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 298px;
    background-color: ${cores.bege};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 40px;
`

export const Logo = styled.img`
    width: 125px;
    height: 57.5px;
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 32.5px;
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`

export const Text = styled.p`   
    margin-top: 80px;
    max-width: 485px;       
    color: ${cores.vermelho};
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: auto;
    margin-right: auto;
`

