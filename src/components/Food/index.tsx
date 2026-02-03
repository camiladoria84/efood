import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



import Tag from '../Tag'
import Button from '../Button'
import Modal from '../Modal'
import StarIcon from '/src/assets/images/estrela.svg'

import * as S from './styles'

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
        <div>
            <S.FoodWrapper $variant={variant}>
                {variant === 'home' && (
                    <>
                        <S.FoodImage
                            src={image}
                            alt={title}
                            $variant={variant}
                        />
                        <S.TagsOverlay>
                            {destaque && (
                                <Tag type="destaque">Destaque da Semana</Tag>
                            )}
                            {category && (
                                <Tag type="categoria">{category}</Tag>
                            )}
                        </S.TagsOverlay>
                    </>
                )}

                <S.Card $variant={variant}>
                    {variant === 'profile' && (
                        <S.FoodImage
                            src={image}
                            alt={title}
                            $variant={variant}
                        />
                    )}

                    {variant === 'home' ? (
                        <>
                            <S.TitleRow>
                                <S.Title $variant={variant}>{title}</S.Title>
                                {score !== undefined && (
                                    <S.ScoreContainer>
                                        <span>{score.toFixed(1)}</span>
                                        <img src={StarIcon} alt="estrela" />
                                    </S.ScoreContainer>
                                )}
                            </S.TitleRow>

                            <S.Description $variant={variant}>
                                {truncatedDescription}
                            </S.Description>

                            <Button
                                color="dark"
                                title="Saiba mais"
                                variant="home"
                                onClick={handleSaibaMais}
                            />
                        </>
                    ) : (
                        <>
                            <S.Title $variant={variant}>{title}</S.Title>

                            <S.Description $variant={variant}>
                                {truncatedDescription}
                            </S.Description>

                            <Button
                                color="light"
                                title="Comprar o produto"
                                variant="profile"
                                onClick={openModal}
                            />
                        </>
                    )}
                </S.Card>
            </S.FoodWrapper>

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
        </div>
    )
}

export default Food
