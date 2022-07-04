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
                {Object.keys(categoriesData).map((category) => (
                    <CategoryCard
                        key={category.title}
                    // bgColor={category.}
                    />
                ))}
                {/* {categoriesData.map((category: any) => (
                    <CategoryCard
                        key={category.title}
                    />
                ))} */}
            </Container>
        </CategoriesCardWrap>
    )
}
