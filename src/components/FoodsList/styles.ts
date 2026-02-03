import styled, { css } from 'styled-components'

type ListContainerProps = {
  $columns: number
  $gap?: number
  $variant?: 'home' | 'profile'
}

export const ListContainer = styled.div<ListContainerProps>`
  display: grid;

  ${({ $variant }) => css`
    grid-template-columns: ${$variant === 'profile'
      ? '1fr 1fr 1fr'
      : '1fr 1fr'};
  `}

  ${({ $gap, $variant }) => css`
    column-gap: ${$variant === 'profile'
      ? '32px'
      : $gap
        ? `${$gap}px`
        : '80px'
    };
  `}

  row-gap: 48px;

  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 80px auto 120px auto;
  padding: 0 16px; 
  box-sizing: border-box;

  @media (max-width: 1024px) {
    /* Tablet: Profile becomes 2 columns, Home stays 2 columns mostly but maybe tighter */
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`

