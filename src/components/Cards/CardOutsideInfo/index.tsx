import React from "react";
import { CardImage, CardInfoWrap, CardWrap } from "./styles";
import Image from "next/image";
import { CardProps } from "../types";
import DefaultImage from "public/images/BG-mockup.png";

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

export function CardOutsideInfo({ cardInfo, cardStyle }: CardProps) {

    if (!cardInfo.image) cardInfo.image = DefaultImage;

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
