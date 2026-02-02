import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import * as S from './styles'

const Footer = () => {
    return (
        <S.FooterContainer>
        <S.Logo src={logo} alt="Logo efood" />
        <S.SocialIcons>
            <S.Icon src={instagram} alt="Instagram" />
            <S.Icon src={facebook} alt="Facebook" />
            <S.Icon src={twitter} alt="Twitter" />
        </S.SocialIcons>
        <S.Text>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
        </S.Text>
        </S.FooterContainer>
    )
} 

export default Footer