import { BannerContainer, RestaurantName, CuisineType } from './styles'

export type BannerProps = {
    image: string
    category: string
    title: string
}

const RestaurantBanner = ({ image, category, title }: BannerProps) => (
    <BannerContainer>
        <img src={image} alt={title} />
        <div className="container">
            <div>
                <CuisineType>{category}</CuisineType>
                <RestaurantName>{title}</RestaurantName>
            </div>
        </div>
    </BannerContainer>
)

export default RestaurantBanner
