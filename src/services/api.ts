export const getRestaurants = async () => {
    const response = await fetch('https://api-ebac.vercel.app/api/efood/restaurantes')

    if (!response.ok) {
        throw new Error('Erro ao buscar restaurantes')
    }

    return response.json()
}
