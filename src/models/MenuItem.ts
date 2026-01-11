export default class MenuItem {
    id: number
    title: string
    description: string
    image: string
    preco: number
    porcao: string

    constructor(
        id: number,
        title: string,
        description: string,
        image: string,
        preco: number,
        porcao: string
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.image = image
        this.preco = preco
        this.porcao = porcao
    }
}
