import { FooterContainer, Logo, SocialIcons, Icon, Text } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => {
    return (
        <FooterContainer>
        <Logo src={logo} alt="Logo efood" />
        <SocialIcons>
            <Icon src={instagram} alt="Instagram" />
            <Icon src={facebook} alt="Facebook" />
            <Icon src={twitter} alt="Twitter" />
        </SocialIcons>
        <Text>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
        </Text>
        </FooterContainer>
    )
} 

export default Footer