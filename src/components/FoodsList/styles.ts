import styled, { css } from 'styled-components'

type ListContainerProps = {
  columns: number
  gap?: number
  variant?: 'home' | 'profile'
}

export const ListContainer = styled.div<ListContainerProps>`
  display: grid;

  ${({ columns, variant }) => css`
    grid-template-columns: repeat(
      ${columns},
      ${variant === 'profile' ? '320px' : '472px'}
    );
  `}

  ${({ gap, variant }) => css`
    column-gap: ${
      variant === 'profile'
        ? '40px'
        : gap
        ? `${gap}px`
        : '80px'
    };
  `}

  row-gap: 48px;

  justify-content: center;
  width: 100%;
  max-width: 1366px;
  margin: 80px auto 120px auto;
  padding: 0 32px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

