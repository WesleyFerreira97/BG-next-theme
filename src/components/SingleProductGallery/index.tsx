import React, { use, useEffect, useRef, useState } from "react";
import { ProductGalleryWrap } from "./styles";
import FallbackImage from "../../../public/images/code.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Swiper as SwiperRef } from "swiper";
import { FilesStrucutreProps } from "src/hooks/useBucket";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { usePublicUrl } from "src/hooks/usePublicUrl";
import { supaDb } from "src/services/supadb";

export type ProductGalleryProps = {
    galleryData: FilesStrucutreProps
}

const fallbackImages = [FallbackImage, FallbackImage, FallbackImage, FallbackImage];

export const SingleProductGallery = ({ galleryData }: ProductGalleryProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);
    const [allUrlImages, setAllUrlImages] = useState<string[]>([]);

    useEffect(() => {
        if (!galleryData) return;

        setAllUrlImages([]);

        const getFinalUrl = async (imageUrl) => {
            const { data } = supaDb
                .storage
                .from("photo")
                .getPublicUrl(imageUrl);

            setAllUrlImages(prev => [...prev, data.publicUrl]);
        };

        galleryData.images.forEach((item, index) => {
            const fileName = item.name;
            const imageFullPath = `${galleryData.bucketPath}/${galleryData.slug}/${fileName}`;

            getFinalUrl(imageFullPath);
        });

    }, [galleryData]);

    return (
        <ProductGalleryWrap>
            <Swiper
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='main-image gallery-swiper'
            >
                {allUrlImages.map((image, index) => {

                    return (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt="Main product image"
                                fill={true}
                            />
                        </SwiperSlide >
                    );
                })}
            </Swiper >
            <Swiper
                modules={[FreeMode, Navigation, Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={10}
                direction="vertical"
                className='grid-thumbnails gallery-swiper'

            >
                {allUrlImages.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className='grid-thumbnails__item'
                    >
                        <Image
                            src={image}
                            alt="Main product image"
                            fill={true}
                        />
                    </SwiperSlide >
                ))}
            </Swiper >
        </ProductGalleryWrap >

    );
};


