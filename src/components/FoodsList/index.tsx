import Food from '../Food'
import { ListContainer } from './styles'

type FoodBase = {
  id: number
  title: string
  description: string
  image: string
  category?: string
  destaque?: boolean
  score?: number
  porcao?: string
  preco?: number
}

export type Props = {
  foods: FoodBase[]
  columns?: number
  gap?: number
  variant?: 'home' | 'profile'
}

const FoodsList = ({
  foods,
  columns = 2,
  gap = 80,
  variant = 'home'
}: Props) => (
  <ListContainer columns={columns} gap={gap} variant={variant}>
    {foods.map((food, index) => (
      <Food
        key={food.id}
        id={food.id}
        title={food.title}
        description={food.description}
        image={food.image}
        category={food.category}
        destaque={index === 0 ? true : food.destaque}
        score={food.score}
        porcao={food.porcao}
        preco={food.preco}
        variant={variant}
      />
    ))}
  </ListContainer>
)

export default FoodsList
