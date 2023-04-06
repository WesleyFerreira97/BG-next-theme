import React from 'react'
import { ProductGalleryWrap } from './styles'
import FallbackImage from "../../../public/images/code.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ProductGalleryProps = {
    images: StaticImageData[]
}

const fallbackImages = [FallbackImage, FallbackImage, FallbackImage, FallbackImage];

const Gallery = ({ images }: ProductGalleryProps) => {
    console.log(images[0]);

    return (
        <ProductGalleryWrap>
            <div className='grid-thumbnails'>
                {images?.map((image, index) => (
                    <div key={index} className='grid-thumbnails__item'>
                        <Image
                            src={image.src}
                            alt="Main product image"
                            fill={true}
                        />
                    </div>
                ))}
            </div>
            <div className='main-image'>
                <Image
                    src={images[0].src}
                    alt="Main product image"
                    quality={100}
                    fill={true}
                />
            </div>
        </ProductGalleryWrap>
    )
}

export default function SingleProductGallery({ images }: Partial<ProductGalleryProps>) {

    if (!images || images.length === 0) {
        return <Gallery images={fallbackImages} />;
    }

    return <Gallery images={fallbackImages} />;
}
