import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import RestaurantBanner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

import { useGetRestaurantQuery } from '../../services/api'

import { cores } from '../../styles'


type ProfileFood = {
    id: number
    title: string
    description: string
    image: string
    porcao: string
    preco: number
}

const Profile = () => {
    const { id } = useParams<{ id: string }>()

    const { data: restaurant, isLoading } = useGetRestaurantQuery(id!)

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Loader color={cores.vermelho} />
            </div>
        )
    }

    if (!restaurant) {
        return <p>Restaurante não encontrado.</p>
    }

    const foods: ProfileFood[] = restaurant.cardapio.map((item) => ({
        id: item.id,
        title: item.nome,
        description: item.descricao,
        image: item.foto,
        porcao: item.porcao,
        preco: item.preco
    }))

    return (
        <>
        <Header />

        <RestaurantBanner
            image={restaurant.capa}
            category={restaurant.tipo}
            title={restaurant.titulo}
        />

        <div className="container">
            <FoodsList
            foods={foods}
            columns={3}
            gap={40}
            variant="profile"
            />
        </div>

        <Footer />
        </>
    )
}

export default Profile

