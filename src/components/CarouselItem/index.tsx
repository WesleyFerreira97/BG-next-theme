import { Card } from '@nextui-org/react'
import React from 'react'
import { CarouselItemWrap } from './styles'

const ItemTitle = ({ children }: any) => {
    console.log(children);

    return (
        <>
            {children}
        </>
    )
}

CarouselItem.Title = ItemTitle;

function CarouselItem(props: any) {
    console.log(props);

    return (
        <CarouselItemWrap>
            <CarouselItem.Title />
            {/* {props.children.map((item) => (
                <>
                aa
                </>
            )} */}
            {props.children}
        </CarouselItemWrap>
    )
}

// Title, Text and Buttons


export { CarouselItem }