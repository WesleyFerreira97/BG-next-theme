import styled, { css } from "styled-components";
import { typography } from "../../styles/typography";

const borderBottomDashed = css`
    padding: .5rem 0 .75rem;
    border-bottom: 1px dashed #D7D7D7;
`;

export const SingleProductWrap = styled.div`
    display: flex;
    justify-content: center;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 3rem 0 2rem;
    }
`;

export const ComponentBehavior = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

export const ProductGallery = styled.div`
    height: 75vh;
    flex-grow: 1;
    aspect-ratio: 9/16;
    display: flex;

    .main-image {
        height: 100%;
        width: 100%;
        position: relative;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .grid-thumbnails {
        height: 100%;
        width: 200px;
        display: none;

        &__item {
            /* height: 15%; */
            width: 55%;
            aspect-ratio: 9/13;
            position: relative;
            margin-bottom: 1rem;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        .grid-thumbnails {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const ProductInfo = styled.div`
    flex-grow: 1;
    padding: 1.25rem;

    .product-info {

        &__div {
            ${borderBottomDashed}
        }

        &__title {
            ${typography.TextLg}
            font-size: 1.75rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.secondary};
        }

        &__price {
            display: block;
            ${typography.TextLg}
            font-size: 1.75rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.tertiary};
            padding: .75rem 0;
        }

        &__payment-info {
            display: block;
            ${typography.TextSm}
            color: ${({ theme }) => theme.colors.neutralAlt};
            padding: .75rem 0 1.25rem;
        }

        &__label {
            color: ${({ theme }) => theme.colors.secondary};
            ${typography.TextLg}
            font-weight: 600;

            &--thin {
                color: ${({ theme }) => theme.colors.secondary};
                ${typography.TextLg}
                font-weight: 300;
            }
        }

        &__color {

            &-available {
                display: flex;
                gap: 1rem;
                margin: 1rem 0;
            }

            .color-button {
                height: 30px;
                width: 30px;
                background-color: #3D087B;
                border-radius: 50%;
            }
        }

        &__size {

            &-available {
                display: flex;
                gap: 1rem;
                margin: 1rem 0;
            }

            .size-button {
                height: 30px;
                width: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 25px; 
                background-color: ${({ theme }) => theme.colors.neutralAlt};
                ${typography.TextSm}
                color: ${({ theme }) => theme.colors.neutral};
                cursor: pointer;
                font-weight: 500;
                font-size: 1.15rem;
            }
        }
    }
    
    .finish-buttons {
        display: flex;
        gap: 1rem;
        margin: 1.25rem 0;
    }

    .cart-button {
        background-color: #27AE60 !important;
        border-radius: 0 !important;

        span {
            margin-left: .5rem;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 45%;
    }
`;

