import React from "react";
import { CardWrap, CardOverlay, CardImage, CardInfoWrap } from "./styles";
import Image from "next/image";
import { CardProps } from "../types";

const CardInfo = ({ cardInfo }: Pick<CardProps, "cardInfo">) => {
    return (
        <CardInfoWrap>
            <div className="card-info">
                <h3 className="card-info__title">
                    {cardInfo.title}
                </h3>
                <span className="card-info__subtitle">
                    {cardInfo.subtitle}
                </span>
                <span className="card-info__category">
                    {cardInfo.categories}
                </span>
                <span className="card-info__link">
                    {cardInfo.link}
                </span>
            </div>
        </CardInfoWrap>
    );
};

export function CardOverlayInfo({ cardInfo, }: any) {
    return (
        <CardWrap>
            <CardImage>
                <Image
                    src={cardInfo.image}
                    alt="Woman image"
                    quality={100}
                />
            </CardImage>
            <CardOverlay />
            <CardInfo cardInfo={cardInfo} />
        </CardWrap>
    );
}

