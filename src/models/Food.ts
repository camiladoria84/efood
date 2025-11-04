export default class Food {
    id: number
    title: string
    description: string
    image: string
    category?: string
    destaque?: boolean
    score?: number

    constructor(
        id: number,
        title: string,
        description: string,
        image: string,
        category?: string,
        destaque?: boolean,
        score?: number
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
        this.category = category
        this.destaque = destaque
        this.score = score
    }
}