import React, { ReactNode } from 'react'
import { Button, CarouselItemWrap, ImageBackground, Text, Title } from './styles'

type ChildrenProps = {
    children: ReactNode;
}

const ItemImage = ({ children }: ChildrenProps) => {
    return <ImageBackground>{children}</ImageBackground>
}

const ItemTitle = ({ children }: ChildrenProps) => {
    return <Title>{children}</Title>
}

const ItemText = ({ children }: ChildrenProps) => {
    return <Text>{children}</Text>
}

const ItemButtons = ({ children }: ChildrenProps) => {
    return <Button>{children}</Button>
}

function CarouselItem(props: ChildrenProps) {

    return (
        <CarouselItemWrap>
            <div className='item__content'>
                {props.children}
            </div>
        </CarouselItemWrap>
    )
}

CarouselItem.Title = ItemTitle;
CarouselItem.Text = ItemText;
CarouselItem.Buttons = ItemButtons;
CarouselItem.Image = ItemImage;

export { CarouselItem }