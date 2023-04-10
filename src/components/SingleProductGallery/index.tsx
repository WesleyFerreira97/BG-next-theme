import React, { use, useEffect, useRef, useState } from 'react'
import { ProductGalleryWrap } from './styles'
import FallbackImage from "../../../public/images/code.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Swiper as SwiperRef } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type ProductGalleryProps = {
    images: StaticImageData[]
}

const fallbackImages = [FallbackImage, FallbackImage, FallbackImage, FallbackImage];

const Gallery = ({ images }: ProductGalleryProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);
    const batata = images || fallbackImages;

    return (
        <ProductGalleryWrap>

            <Swiper
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='main-image'
            >
                {batata.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.src}
                            alt="Main product image"
                            fill={true}
                        />
                    </SwiperSlide >
                ))}
            </Swiper >

            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                direction="vertical"
                className='grid-thumbnails'
            >
                {batata.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid-thumbnails__item'>
                            <Image
                                src={image.src}
                                alt="Main product image"
                                fill={true}
                            />
                        </div>
                    </SwiperSlide >
                ))}
            </Swiper >
        </ProductGalleryWrap >

    )
}


export default function SingleProductGallery({ images }: Partial<ProductGalleryProps>) {

    if (!images || images.length === 0) {
        return <Gallery images={fallbackImages} />;
    }

    return <Gallery images={fallbackImages} />;
}
