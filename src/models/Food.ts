export default class Food {
    id: number
    title: string
    description: string
    image: string
    category: string
    destaque: boolean
    score: number
    portion: string
    price: number

    constructor(
        id: number,
        title: string,
        description: string,
        image: string,
        category: string,
        destaque: boolean,
        score: number,
        portion: string,
        price: number 
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
        this.category = category
        this.destaque = destaque
        this.score = score
        this.portion = portion
        this.price = price
    }
}
