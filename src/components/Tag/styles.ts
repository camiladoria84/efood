import styled from 'styled-components'
import { cores } from '../../styles'


export const TagContainer = styled.div<{ type?: 'destaque' | 'categoria' }>`
  display: inline-block;
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: normal;
  padding: 4px 6px;
  margin: 8px;
`

