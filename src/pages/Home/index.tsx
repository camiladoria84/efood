import { useGetRestaurantsQuery } from '../../services/api'
import type { Restaurant } from '../../services/api'

import Hero from '../../components/Hero'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import { cores } from '../../styles'


type HomeFood = {
    id: number
    title: string
    description: string
    image: string
    category: string
    destaque: boolean
    score: number
}

const Home = () => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery()

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Loader color={cores.vermelho} />
            </div>
        )
    }

    if (!restaurants) {
        return <p>Erro ao carregar restaurantes</p>
    }

    const foods: HomeFood[] = restaurants.map((item: Restaurant) => ({
        id: item.id,
        title: item.titulo,
        description: item.descricao,
        image: item.capa,
        category: item.tipo,
        destaque: item.destacado,
        score: item.avaliacao
    }))

    return (
        <>
        <Hero />

        <FoodsList
            foods={foods}
            columns={2}
            gap={80}
            variant="home"
        />

        <Footer />
        </>
    )
}

export default Home
