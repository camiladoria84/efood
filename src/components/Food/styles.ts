import styled, { css } from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'


export const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FoodWrapper = styled.div<{ variant?: 'home' | 'profile' }>`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.variant === 'profile' ? '320px' : '472px')};
    position: relative;
    ${(props) =>
        props.variant === 'profile' &&
        css`
            gap: 40px;
        `}
`

export const FoodImage = styled.img<{ variant?: 'home' | 'profile' }>`
    width: 100%;
    height: ${(props) => (props.variant === 'profile' ? '180px' : '217px')};
    object-fit: cover;
`

export const Card = styled.div<{ variant?: 'home' | 'profile' }>`
    height: ${(props) => (props.variant === 'profile' ? '338px' : '181px')};
    width: ${(props) => (props.variant === 'profile' ? '320px' : '472px')};
    background-color: ${(props) => props.variant === 'profile' ? cores.vermelho : cores.bege};
    padding: ${(props) => (props.variant === 'profile' ? '8px' : '8px')};
    border: 1px solid ${cores.vermelho};
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.h3<{ variant?: 'home' | 'profile' }>`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    margin-top: 8px;
    color: ${(props) => props.variant === 'profile' ? cores.bege : cores.vermelho};
`

export const Description = styled.p<{ variant?: 'home' | 'profile' }>`
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
    color: ${(props) => props.variant === 'profile' ? cores.bege : cores.vermelho};
`

export const TagsOverlay = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 8px;

    ${TagContainer} {
        margin: 0;
    }
`

export const ScoreContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    span {
        color: ${cores.vermelho};
        font-size: 18px;
        font-weight: bold;
    }

    img {
        width: 20px;
        height: 20px;
    }
`
