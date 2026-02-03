import Food from '../Food'
import Loader from '../Loader'

import { cores } from '../../styles'

import { ListContainer } from './styles'
type FoodBase = {
  id: number
  title: string
  description: string
  image: string
  category?: string
  destaque?: boolean
  score?: number
  portion?: string
  price?: number
}

export type Props = {
  foods: FoodBase[]
  columns?: number
  gap?: number
  variant?: 'home' | 'profile'
  isLoading?: boolean
}

const FoodsList = ({
  foods,
  columns = 2,
  gap = 80,
  variant = 'home',
  isLoading = false
}: Props) => {
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
        <Loader color={cores.vermelho} />
      </div>
    )
  }

  return (
    <ListContainer $columns={columns} $gap={gap} $variant={variant}>
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
          portion={food.portion}
          price={food.price}
          variant={variant}
        />
      ))}
    </ListContainer>
  )
}

export default FoodsList
