import { BannerContainer, RestaurantName, CuisineType } from './styles'

import { cores } from '../../styles'

import Loader from '../Loader'

export type BannerProps = {
    image: string
    category: string
    title: string
    isLoading?: boolean
}

const RestaurantBanner = ({ image, category, title, isLoading = false }: BannerProps) => {
    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <Loader color={cores.vermelho} />
            </div>
        )
    }

    return (
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
}

export default RestaurantBanner
