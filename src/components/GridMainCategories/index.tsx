import { Card, Container, Row } from '@nextui-org/react'
import React from 'react'
import { GridWrap } from './styles'
import { Card as CardNative } from '../Card';

export function GridMainCategories() {
    return (
        <GridWrap>
            <Container md direction='column'>
                <CardNative />
                <Row>
                    <Card>
                        <Card.Body>
                            Card Body
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            Card Body
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </GridWrap>
    )
}
