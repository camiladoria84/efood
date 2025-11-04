
import styled from 'styled-components'

type ListContainerProps = {
  columns: number
  gap?: number
  variant?: 'home' | 'profile'
}

export const ListContainer = styled.div<ListContainerProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => (props.variant === 'profile' ? '320px' : '472px')}
  );
  column-gap: ${(props) =>
    props.variant === 'profile'
      ? '40px'
      : props.gap
      ? `${props.gap}px`
      : '80px'};
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
