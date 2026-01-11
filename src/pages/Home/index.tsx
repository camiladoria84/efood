import Hero from '../../components/Hero'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'
import type { Restaurant } from '../../services/api'

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
        return <p>Carregando...</p>
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
