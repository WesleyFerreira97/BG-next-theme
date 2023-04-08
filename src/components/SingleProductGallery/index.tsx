import React, { useState } from 'react'
import { ProductGalleryWrap } from './styles'
import FallbackImage from "../../../public/images/code.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type ProductGalleryProps = {
    images: StaticImageData[]
}

const fallbackImages = [FallbackImage, FallbackImage, FallbackImage, FallbackImage];

const Gallery = ({ images }: ProductGalleryProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <ProductGalleryWrap>
            {/* <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="vai"
            > */}
            <div className='grid-thumbnails'>
                {/* <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper grid-thumbnails"
                > */}
                {images?.map((image, index) => (
                    // <SwiperSlide
                    //     key={index}
                    //     className='grid-thumbnails__item'
                    // >
                    <div className='grid-thumbnails__item'>
                        <Image
                            src={image.src}
                            alt="Main product image"
                            fill={true}
                        />
                    </div>
                    // </SwiperSlide>
                ))}
                {/* </Swiper> */}
            </div>
            <div className='main-image'>
                <Image
                    src={images[0].src}
                    alt="Main product image"
                    quality={100}
                    fill={true}
                />
            </div>
            {/* </Swiper> */}
        </ProductGalleryWrap>
    )
}

export default function SingleProductGallery({ images }: Partial<ProductGalleryProps>) {

    if (!images || images.length === 0) {
        return <Gallery images={fallbackImages} />;
    }

    return <Gallery images={fallbackImages} />;
}
