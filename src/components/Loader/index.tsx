import { FadeLoader } from 'react-spinners'

import { cores } from '../../styles'

import { LoaderContainer } from './styles'

type Props = {
    size?: number
    color?: string
    height?: number
}

const Loader = ({ size = 15, color = cores.vermelho, height = 300 }: Props) => {
    return (
        <LoaderContainer height={height}>
        <FadeLoader color={color} height={size} width={4} radius={2} margin={2} />
        </LoaderContainer>
    )
}

export default Loader
