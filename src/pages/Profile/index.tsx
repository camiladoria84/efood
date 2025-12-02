import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import RestaurantBanner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'

type CardapioItem = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}

type Restaurante = {
    id: number
    titulo: string
    descricao: string
    tipo: string
    capa: string
    avaliacao: number
    cardapio: CardapioItem[]
}

const Profile = () => {
    const { id } = useParams<{ id: string }>()
    const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await fetch(
                    `https://api-ebac.vercel.app/api/efood/restaurantes/${id}`
                )

                const data: Restaurante = await response.json()
                setRestaurante(data)
            } catch (error) {
                console.error('Erro ao carregar o restaurante:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchRestaurant()
    }, [id])

    if (loading) return <p>Carregando...</p>
    if (!restaurante) return <p>Restaurante não encontrado.</p>

    return (
        <>
            <Header />

            <RestaurantBanner
                image={restaurante.capa}
                category={restaurante.tipo}
                title={restaurante.titulo}
            />

            <div className="container">
                <FoodsList
                    foods={restaurante.cardapio.map((item) => ({
                        id: item.id,
                        title: item.nome,
                        description: item.descricao,
                        image: item.foto,
                        portion: item.porcao, 
                        price: item.preco,  
                        variant: 'profile'
                    }))}
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
