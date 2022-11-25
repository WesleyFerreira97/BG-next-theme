import React from "react";
import people1 from "public/images/people1.jpg";
import { CardImage, CardWrap } from "./styles";
import type * as Stitches from "@stitches/react";
import { theme } from "stitches.config";
import Image from "next/image";

type CardInfo = {
    title: string,
    subTitle?: string,
    image: string,
    link?: string,
    price?: number,
    monthlyInstallments?: string,
    categories?: string[]
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
        // Refact: Identify token theme color
        bgColor?: string
    }

}

export function Card({ cardInfo, cardStyle }: CardProps) {

    return (
        <CardWrap
            css={cardStyle}
        >
            <CardImage>
                <Image
                    src={cardInfo.image}
                    alt="Woman image"
                    width="100"
                    height="100"
                // className="card-image"
                />
            </CardImage>
            {cardInfo.title}
        </CardWrap>
    );
}
