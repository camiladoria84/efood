import { useState } from 'react'
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
import Modal from '../Modal'
import StarIcon from '/src/assets/images/estrela.svg'

export type Props = {
    id: number
    title: string
    description: string
    image: string
    category?: string
    destaque?: boolean
    score?: number
    portion?: string    
    price?: number 
    variant?: 'home' | 'profile'
}

const truncate = (text: string, max: number): string =>
    text.length > max ? text.substring(0, max) + '...' : text

const Food = ({
    id,
    title,
    description,
    image,
    category,
    destaque = false,
    score,
    portion,
    price,   
    variant = 'home'
}: Props) => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSaibaMais = () => {
        navigate(`/profile/${id}`)
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const truncatedDescription =
        variant === 'home'
            ? truncate(description, 245)
            : truncate(description, 120)

    return (
        <>
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

                            <Description variant={variant}>
                                {truncatedDescription}
                            </Description>

                            <Button
                                color="dark"
                                title="Saiba mais"
                                variant="home"
                                onClick={handleSaibaMais}
                            />
                        </>
                    ) : (
                        <>
                            <Title variant={variant}>{title}</Title>

                            <Description variant={variant}>
                                {truncatedDescription}
                            </Description>

                            <Button
                                color="light"
                                title="Comprar o produto"
                                variant="profile"
                                onClick={openModal}
                            />
                        </>
                    )}
                </Card>
            </FoodWrapper>

            {variant === 'profile' && (
                <Modal
                    open={isModalOpen}
                    onClose={closeModal}
                    image={image}
                    title={title}
                    description={description}
                    portion={portion} 
                    price={price}
                />
            )}
        </>
    )
}

export default Food
