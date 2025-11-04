import MassaImg from '../../assets/images/lula.png'
import { BannerContainer, RestaurantName, CuisineType } from './styles'

const RestaurantBanner = () => (
    <BannerContainer>
        <img src={MassaImg} alt="Restaurante" />
        <div className="container">
            <div>
                <CuisineType>Italiana</CuisineType>
                <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
            </div>
        </div>
    </BannerContainer>
)

export default RestaurantBanner
