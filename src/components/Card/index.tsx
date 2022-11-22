import React from "react";
import people1 from "public/images/people1.jpg";
import { CardWrap } from "./style";

type CardInfo = {
    title: string,
    subTitle: string,
    image: string,
    link: string,

}

type CardStyle = {
    bgColor?: string
}

type CardProps = CardStyle & Partial<CardInfo>;

export function Card(props: CardProps) {
    return (
        <CardWrap>
            {props.title}
        </CardWrap>
    );
}
