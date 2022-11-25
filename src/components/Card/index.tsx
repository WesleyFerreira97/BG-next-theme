import React from "react";
import people1 from "public/images/people1.jpg";
import { CardImage, CardInfoWrap, CardOverlay, CardWrap } from "./styles";
import type * as Stitches from "@stitches/react";
import { theme } from "stitches.config";
import Image from "next/image";

type CardInfoProps = {
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
    cardInfo: CardInfoProps,
    cardStyle?: Partial<CardStyle> & {
        // Refact: Identify token theme color
        bgColor?: string
    },
}

const CardInfo = ({ cardInfo }: Pick<CardProps, "cardInfo">) => {
    return (
        <CardInfoWrap>
            <div className="card-info">
                <h3 className="card-info__title">
                    {cardInfo.title}
                </h3>
                <span className="card-info__price">
                    R$ {cardInfo.price}
                </span>
                <span className="card-info__installments">
                    {cardInfo.monthlyInstallments}
                </span>
            </div>
        </CardInfoWrap>
    );
};

export function Card({ cardInfo, cardStyle }: CardProps) {

    return (
        <CardWrap css={cardStyle} >
            <CardImage>
                <Image
                    src={cardInfo.image}
                    alt="Woman image"
                    quality={100}
                />
            </CardImage>
            <CardInfo cardInfo={cardInfo} />
        </CardWrap>
    );
}
