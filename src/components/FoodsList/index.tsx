import Food from '../Food'
import { ListContainer } from './styles'
import FoodModel from '../../models/Food'

export type Props = {
  foods: FoodModel[]
  columns?: number
  gap?: number
  variant?: 'home' | 'profile'
}

const FoodsList = ({ foods, columns = 2, gap = 80, variant = 'home'}: Props) => (
  <ListContainer columns={columns} gap={gap} variant={variant}>
    {foods.map((food, index) => (
      <Food
        key={food.id}
        title={food.title}
        description={food.description}
        image={food.image}
        category={food.category}
        destaque={index === 0 ? true : food.destaque}
        score={food.score}
        variant={variant} id={food.id}      />
    ))}
  </ListContainer>
)

export default FoodsList
