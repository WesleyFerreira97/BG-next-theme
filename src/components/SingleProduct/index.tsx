import React, { useEffect, useState } from "react";
import { Container } from "../Layout/Container";
import { ComponentBehavior, ProductInfo, SingleProductWrap } from "./styles";
import { Button } from "@nextui-org/react";
import { ShoppingCartSimple } from "phosphor-react";
import { SelectedValue, ToggleGroup } from "../ToggleGroup";
import { Formik } from "formik";
import * as Yup from 'yup';
import { ProductGalleryProps, SingleProductGallery } from "../SingleProductGallery";
import { useAppSelector } from "src/store";
import { useCart } from "src/hooks/useCart";
import { useCheckout } from "src/hooks/useCheckout";
import { FilesStrucutreProps, useBucket } from "src/hooks/useBucket";
import type { ProductWithBucketProps } from "src/types/product";
import type { CartDataProps } from "src/types/cartTypes";

type SingleProductProps = {
    data: ProductWithBucketProps;
};

const orderValidation = Yup.object().shape({
    selectedSize: Yup.string()
        .required('Selecione um tamanho'),
    selectedColor: Yup.string()
        .required('Selecione uma cor'),
});

const colorsData: any = {
    preto: {
        label: "Preto",
        hex: "#1F1D36"
    },
    purple: {
        label: "Roxo",
        hex: "#3F3351"
    },
    Vinho: "#864879",
    Salmão: "#E9A6A6",
};

export function SingleProduct({ data }: SingleProductProps) {
    const { sizes_available, type_product_sizes } = data;
    const theme = useAppSelector((state) => state);
    const { addItem, removeItem } = useCart();
    const { checkoutNavigate } = useCheckout();
    const bucketPath = `product/${data.bucket_folder}/${data.id}`
    const { filesStructure, selectResponse, selectResponseError } = useBucket({
        bucketPath: bucketPath,
        selectInsideFolders: true
    })
    const [colorsAvailable, setColorsAvailable] = useState([])
    const [currentGalleryImages, setCurrentGalleryImages] = useState<FilesStrucutreProps>()

    const FormInitialValues: CartDataProps | any = {
        productTitle: data.title,
        price: data?.price,
        selectedSize: null,
        selectedColor: null,
        image: data?.image,
    }

    useEffect(() => {
        if (!filesStructure) return

        checkColorsAvailable()
    }, [filesStructure, currentGalleryImages])

    const checkColorsAvailable = () => {
        const currentColors = [];

        const colorsAvailable = filesStructure.forEach((item) => {
            if (item.slug === "main") return

            currentColors.push(item.slug)
        })

        setColorsAvailable(currentColors)
    }

    const handleChangeGallery = (value: string) => {
        let selectedImages = filesStructure.filter((item) => item.slug === value)

        setCurrentGalleryImages(selectedImages[0])
    }


    return (
        <SingleProductWrap>
            <Container xs={100}>
                <ComponentBehavior>
                    <SingleProductGallery galleryData={currentGalleryImages} />
                    <ProductInfo>
                        <div className='product-info__div'>
                            <h1 className='product-info__title'>
                                {data?.title}
                            </h1>
                            <span className='product-info__price'>
                                R${data?.price}
                            </span>
                            <span className='product-info__payment-info'>
                                Parcelamos no cartão em até 12x, aceitamos Pix
                            </span>
                        </div>
                        <Formik
                            initialValues={FormInitialValues}
                            validationSchema={orderValidation}
                            onSubmit={(values: CartDataProps) => {
                                if (!values) return;

                                addItem(values);
                                checkoutNavigate(values);
                            }}
                        >
                            {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
                                <>
                                    <div className='product-info__div'>
                                        <div className='product-info__color'>
                                            <span className='product-info__label'>
                                                Cor: &nbsp;
                                                <span className='product-info__label--thin'>
                                                    {values.selectedColor}
                                                </span>
                                            </span>
                                            <div className='product-info__color-available'>
                                                <ToggleGroup
                                                    name="selectedColor"
                                                    itemType="color"
                                                >
                                                    {colorsAvailable.map((item: string) => (
                                                        <ToggleGroup.Item
                                                            key={item}
                                                            value={item}
                                                            color={colorsData["preto"].hex}
                                                            onClick={() => handleChangeGallery(item)}
                                                        />
                                                    ))}
                                                </ToggleGroup>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='product-info__div'>
                                        <div className='product-info__size'>
                                            <span className='product-info__label'>
                                                Tamanhos :
                                            </span>
                                            <ToggleGroup
                                                name="selectedSize"
                                                itemType="label"
                                            >
                                                {sizes_available && Object.entries(sizes_available[type_product_sizes])
                                                    .map((item) => {
                                                        const currentValue = item[0]
                                                        const isAvailable = item[1] as boolean

                                                        return (
                                                            <ToggleGroup.Item
                                                                key={currentValue}
                                                                value={currentValue}
                                                                label={currentValue}
                                                                available={isAvailable}
                                                            />
                                                        )
                                                    }
                                                    )}
                                            </ToggleGroup>
                                        </div>
                                    </div>

                                    <div className='finish-buttons'>
                                        <Button
                                            className='cart-button'
                                            css={{
                                                background: "#27AE60",
                                                borderRadius: "4px",
                                                padding: "24px 32px",
                                            }}
                                            onPress={handleSubmit as () => void}
                                        >
                                            <ShoppingCartSimple size={24} />
                                            <span className="label">Adicionar ao carrinho</span>
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Formik>
                    </ProductInfo>
                </ComponentBehavior>
            </Container>
        </SingleProductWrap >
    );
}

