import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/fundo.png'

import { BannerContainer, Title, LogoImage } from './styles'

const Hero = () => (
    <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
        <LogoImage src={logo} alt="efood" />
        <Title>
            Viva experiências gastronômicas no conforto da sua casa
        </Title>
        </div>
    </BannerContainer>
)

export default Hero
