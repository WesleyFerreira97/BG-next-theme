/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { CardImage, CardInfoWrap, CardWrap } from "./styles";
import Image from "next/image";
import { CardProps } from "../types";
import DefaultImage from "public/images/code.jpg";
import { ShoppingCartSimple } from "phosphor-react";
import { public_storage } from "src/services/supadb";
import { useBucket } from "src/hooks/useBucket";

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
    const { filesStructure, selectResponse, selectBucket } = useBucket({});
    const [thumbnail, setThumbnail] = useState(DefaultImage);

    useEffect(() => {
        if (!cardInfo) return;

        const bucketPath = `product/${cardInfo.bucket_folder}/${cardInfo.id}/main`;
        
        selectBucket({
            bucketPath: bucketPath,
            selectInsideFolders: false,
            limit: 1
        });
        
    }, []);

    useEffect(() => {
        let hasNoImage = selectResponse && selectResponse[0]?.name === undefined;
        if (!selectResponse || hasNoImage) return;

        const pathImage = `${public_storage}/photo/product/${cardInfo.bucket_folder}/${cardInfo.id}/main/${selectResponse[0]?.name}`;

        setThumbnail(pathImage as any);
    }, [selectResponse, filesStructure]);

    return (
        <CardWrap css={cardStyle} >
            <CardImage>
                <div className="card-image__wrap">
                    <Image
                        src={thumbnail}
                        alt="Woman image"
                        fill={true}
                        quality={100}
                    />
                </div>
                <div className="hover-bar">
                    <span className="hover-bar__text">
                        <ShoppingCartSimple size={22} />
                    </span>
                </div>
            </CardImage>
            <CardInfo cardInfo={cardInfo} />
        </CardWrap>
    );
}

