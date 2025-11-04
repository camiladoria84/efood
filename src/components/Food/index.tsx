import { useNavigate } from 'react-router-dom'

import {
    FoodWrapper,
    FoodImage,
    Card,
    Title,
    Description,
    TagsOverlay,
    TitleRow,
    ScoreContainer
} from './styles'

import Tag from '../Tag'
import Button from '../Button'
import StarIcon from '/src/assets/images/estrela.svg'

export type Props = {
    title: string
    description: string
    image: string
    category?: string
    destaque?: boolean
    score?: number
    variant?: 'home' | 'profile'
}

const Food = ({
    title,
    description,
    image,
    category,
    destaque = false,
    score,
    variant = 'home'
}: Props) => {
    const navigate = useNavigate()
    const handleSaibaMais = () => {
        navigate('/profile')
    }

    return (
        <FoodWrapper variant={variant}>
            {variant === 'home' && (
                <>
                    <FoodImage src={image} alt={title} variant={variant} />
                    <TagsOverlay>
                        {destaque && <Tag type="destaque">Destaque da Semana</Tag>}
                        {category && <Tag type="categoria">{category}</Tag>}
                    </TagsOverlay>
                </>
            )}

            <Card variant={variant}>
                {variant === 'profile' && (
                    <FoodImage src={image} alt={title} variant={variant} />
                )}

                {variant === 'home' ? (
                    <>
                        <TitleRow>
                            <Title variant={variant}>{title}</Title>
                            {score !== undefined && (
                                <ScoreContainer>
                                    <span>{score.toFixed(1)}</span>
                                    <img src={StarIcon} alt="estrela" />
                                </ScoreContainer>
                            )}
                        </TitleRow>

                        <Description variant={variant}>{description}</Description>

                        <Button color="dark" title="Saiba mais" variant="home" onClick={handleSaibaMais} />
                    </>
                ) : (
                    <>
                        <Title variant={variant}>{title}</Title>
                        <Description variant={variant}>{description}</Description>
                        <Button color="light" title="Adicionar ao carrinho" variant="profile" onClick={() => { }} />
                    </>
                )}
            </Card>
        </FoodWrapper>
    )
}

export default Food