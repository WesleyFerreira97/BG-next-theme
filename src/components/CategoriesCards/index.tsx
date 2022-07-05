import React from 'react'
import { CategoryCard } from '../CategoryCard'
import { Container } from '../Container'
import { CategoriesCardWrap } from './styles'
import { theme } from '../../styles/theme'

type CategoryData = {
    title: string,
    subTitle: string,
    bg: string,
}

type Test = {
    title: string,
    subtitle: string,
    bg: string,
}

const categoriesData = {
    cat1: {
        id: 1,
        title: 'Regatas',
        subTitle: 'SubTitle',
        bg: theme.colors.categories.regatas,
    },
    cat2: {
        id: 2,
        title: 'Regatas',
        subTitle: 'SubTitle',
        bg: theme.colors.categories.regatas,
    },
    cat3: {
        id: 3,
        title: 'Regatas',
        subTitle: 'SubTitle',
        bg: theme.colors.categories.regatas,
    },
}

export function CategoriesCards() {
    return (
        <CategoriesCardWrap>
            <Container>
                {Object.values(categoriesData).map((cat, index) => {
                    return (
                        <CategoryCard
                            key={index}
                        />
                    )
                })}
            </Container>
        </CategoriesCardWrap>
    )
}
