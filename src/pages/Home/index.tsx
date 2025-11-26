import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import FoodsList from '../../components/FoodsList'
import Footer from '../../components/Footer'
import Food from '../../models/Food'

interface ApiRestaurant {
    id: number
    titulo: string
    descricao: string
    capa: string
    tipo: string
    destacado: boolean
    avaliacao: number
}

const Home = () => {
    const [foods, setFoods] = useState<Food[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data: ApiRestaurant[]) => {
            const loadedFoods = data.map(
            (item) =>
                new Food(
                item.id,
                item.titulo,
                item.descricao,
                item.capa,
                item.tipo,
                item.destacado,
                item.avaliacao
                )
            )

            setFoods(loadedFoods)
        })
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Carregando...</p>

    return (
        <>
        <Hero />
        <div className="container">
            <FoodsList foods={foods} columns={2} gap={80} variant="home" />
        </div>
        <Footer />
        </>
    )
}

export default Home
