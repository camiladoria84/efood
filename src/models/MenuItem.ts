export default class MenuItem {
    id: number
    title: string
    description: string
    image: string
    price: number
    portion: string

    constructor(
        id: number,
        title: string,
        description: string,
        image: string,
        price: number,
        portion: string
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
        this.price = price
        this.portion = portion
    }
}
