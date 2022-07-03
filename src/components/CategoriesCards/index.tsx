import React from 'react'
import { CategoryCard } from '../CategoryCard'
import { Container } from '../Container'
import { CategoriesCardWrap } from './styles'

export function CategoriesCards() {
    return (
        <CategoriesCardWrap>
            <Container>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </Container>
        </CategoriesCardWrap>
    )
}
