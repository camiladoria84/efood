import styled from 'styled-components'

import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
`

export const CartContainer = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`

export const Sidebar = styled.aside`
    background-color: ${cores.vermelho};
    width: 360px;
    max-width: 100%;
    height: 100vh;
    padding: 32px 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    ul {
        overflow-y: auto;
    }

    > ${ButtonContainer} {
        width: 100%;
        margin-top: 24px;
    }

    p {
    color: ${cores.bege};
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
    }
`


export const CartItem = styled.li`
    position: relative;
    display: flex;
    background-color: ${cores.bege};
    width: 100%;
    height: 100px;
    padding: 8px;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 16px;
    }

    div {
        flex: 1;
    }

    h3 {
        color: ${cores.vermelho};
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    span {
        display: block;
        color: ${cores.vermelho};
        font-size: 14px;
        line-height: 22px;
    }

    button {
        position: absolute;
        right: 0;
        bottom: 8px;
        background: none;
        border: none;
        cursor: pointer;

        img {
            width: 16px;
            height: 16px;
        }
    }
`

export const Prices = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 700;
`

export const EmptyCartMessage = styled.p`
    color: ${cores.bege};
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin-top: 32px;
`



export const Title = styled.h3`
    color: ${cores.bege};
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const Row = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
`

export const InputGroup = styled.div`
    flex: 1;

    label {
        display: block;
        color: ${cores.bege};
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 700;
    }

    input {
        width: 100%;
        height: 32px;
        padding: 0 8px;
        background-color: ${cores.bege};
        border: none;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        margin-top: 8px;

        &.error {
            border: 2px solid ${cores.vermelho};
        }
    }
`

export const InputSmall = styled(InputGroup)`
    flex: 1;
`

export const InputMedium = styled(InputGroup)`
    flex: 2;
`


export const Buttons = styled.div`
    margin-top: 24px;

    ${ButtonContainer} {
        width: 100%;
        margin-bottom: 8px;
    }

    ${ButtonContainer}:last-child {
        margin-bottom: 0;
    }
`
