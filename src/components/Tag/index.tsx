import type { ReactNode } from 'react'
import { TagContainer } from './styles'

export type Props = {
    children: ReactNode
    type?: 'destaque' | 'categoria'
}

const Tag = ({ children, type = 'categoria' }: Props) => {
    return <TagContainer type={type}>{children}</TagContainer>
}

export default Tag
