import styled from "styled-components"
import { cores } from "../../styles"

interface Props {
    $color: 'dark' | 'light'
    $variant?: 'home' | 'profile'
    disabled?: boolean
}

export const ButtonContainer = styled.button<Props>`
    display: ${({ $variant }) => ($variant === 'profile' ? 'block' : 'inline-block')};
    width: ${({ $variant }) => ($variant === 'profile' ? '100%' : 'auto')};
    align-self: ${({ $variant }) => ($variant === 'profile' ? 'stretch' : 'flex-start')};

    background-color: ${({ $color }) =>
        $color === 'dark' ? cores.vermelho : cores.bege};
    color: ${({ $color }) => ($color === 'dark' ? cores.bege : cores.vermelho)};

    text-align: center;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;

    padding: 8px 12px; 
    border: none;
    margin: 0;      
    cursor: pointer;

    &:hover {
        opacity: 0.92;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`

