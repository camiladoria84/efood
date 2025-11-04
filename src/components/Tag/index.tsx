import { TagContainer } from './styles'

export type Props = {
    children: string
    type?: 'destaque' | 'categoria' // tipo da tag
}

const Tag = ({ children, type = 'categoria' }: Props) => {
    return <TagContainer type={type}>{children}</TagContainer>
}

export default Tag
