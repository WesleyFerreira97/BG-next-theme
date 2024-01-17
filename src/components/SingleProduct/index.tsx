import React from "react";
import { Container } from "../Layout/Container";
import { ComponentBehavior, ProductInfo, SingleProductWrap } from "./styles";
import { Button } from "@nextui-org/react";
import { ShoppingCartSimple } from "phosphor-react";
import { ToggleGroup } from "../ToggleGroup";
import { ProductWithBucketProps } from "src/types/product";
import { Formik } from "formik";
import * as Yup from 'yup';
import SingleProductGallery from "../SingleProductGallery";
import { CartDataProps } from "src/types/cartTypes";
import { useAppSelector } from "src/store";
import { useCart } from "src/hooks/useCart";

type SingleProductProps = {
    data: Partial<ProductWithBucketProps>;
};

const orderValidation = Yup.object().shape({
    selectedSize: Yup.string()
        .required('Selecione um tamanho'),
    selectedColor: Yup.string()
        .required('Selecione uma cor'),
});

const fakeColorData: any = {
    Preto: "#1F1D36",
    Roxo: "#3F3351",
    Vinho: "#864879",
    Salmão: "#E9A6A6",
};

export function SingleProduct(props: SingleProductProps) {
    const { data } = props;
    const theme = useAppSelector((state) => state);
    const { addItem, removeItem } = useCart();

    const FormInitialValues: CartDataProps | any = {
        productTitle: data.title,
        price: data?.price,
        selectedSize: null,
        selectedColor: null,
        image: data?.image,
    }

    return (
        <SingleProductWrap>
            <Container xs={100}>
                <ComponentBehavior>
                    <SingleProductGallery />
                    <ProductInfo>
                        <div className='product-info__div'>
                            <h1 className='product-info__title'>
                                {data?.title}
                            </h1>
                            <span className='product-info__price'>
                                R$39,90
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
                                // checkoutNavigate(values);
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
                                                    {Object.keys(fakeColorData)
                                                        .map((item: string) => (
                                                            <ToggleGroup.Item
                                                                key={item}
                                                                value={item}
                                                                color={fakeColorData[item]}
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
                                                {Object.keys(data.sizes_available)
                                                    .map((item) => (
                                                        <ToggleGroup.Item
                                                            key={item}
                                                            value={item}
                                                            label={item}
                                                            available={data.sizes_available[item]}
                                                        />
                                                    ))}
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

