import React from 'react'
import { CategoryCard } from '../CategoryCard'
import { Container } from '../Container'
import { CategoriesCardWrap } from './styles'
import { theme } from '../../styles/theme'

const categoriesData = {
    cat1: {
        title: 'Regatas',
        subTitle: 'SubTitle',
        bg: theme.colors.categories.regatas,
    },
    cat2: {
        title: 'Regatas',
        subTitle: 'SubTitle',
        bg: theme.colors.categories.regatas,
    },
    cat3: {
        title: 'Regatas',
        subTitle: 'SubTitle',
        bg: theme.colors.categories.regatas,
    },
}

export function CategoriesCards() {
    return (
        <CategoriesCardWrap>
            <Container>
                {categoriesData.map((category: any) => (
                    <CategoryCard
                        key={category.title}
                    />
                ))}
            </Container>
        </CategoriesCardWrap>
    )
}
