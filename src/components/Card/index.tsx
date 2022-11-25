import React from "react";
import people1 from "public/images/people1.jpg";
import { CardWrap } from "./style";
import type * as Stitches from "@stitches/react";
import { theme } from "stitches.config";

type CardInfo = {
    title: string,
    subTitle?: string,
    image: string,
    link?: string,
}

type StyleProps =
    // | "background"
    | "aspectRatio"
    | "borderRadius"
    | "boxShadow";

type CardStyle = Record<StyleProps, string>;

type CardProps = {
    cardInfo: CardInfo,
    cardStyle?: Partial<CardStyle> & {
        // Identify token theme color
        bgColor: string
    }

}





export function Card({ cardInfo, cardStyle }: CardProps) {

    return (
        <CardWrap
            css={{
                ...cardStyle,

            }}
        >
            {cardInfo.title}
        </CardWrap>
    );
}
