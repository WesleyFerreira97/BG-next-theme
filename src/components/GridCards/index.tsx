import React from 'react'
import { Card } from '../Card'
import { Container } from '../Container'
import { CategoriesCardWrap } from './styles'
import { theme } from '../../styles/theme'
import { Grid } from '../Grid'

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

export function GridCards() {
    return (
        <CategoriesCardWrap>
            <Container>
                <Grid container>
                    {Object.values(categoriesData).map((cat, index) => {
                        return (
                            <Grid
                                item
                                key={index}
                                xs={2}
                                md={4}
                                gap={{
                                    xs: 1,
                                    sm: 2,
                                }}
                            >
                                <Card />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </CategoriesCardWrap>
    )
}
