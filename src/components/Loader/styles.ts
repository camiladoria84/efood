import styled from 'styled-components'

interface Props {
    height: number
}

export const LoaderContainer = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ height }) => height}px;
`
