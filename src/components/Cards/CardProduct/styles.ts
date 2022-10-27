import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { typography } from "../../../styles/typography";

export const CardWrap = styled.div`
    width: 100%;
    height: 100%;
    /* max-height: 400px; */
    aspect-ratio: 4/6;

    .card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: .5rem;

        &__title {
            ${typography.TextLg}
            font-weight: 600;
            font-size: 1rem;
        }

        &__subtitle { 
            ${typography.TextSm}
            font-size: .8rem;
            color: ${({ theme }) => theme.colors.neutralAlt};
        }

        &__price {
            margin-top: .5rem;
            ${typography.Text}
            color: #7DCE13;
        }
    }
`;

export const CardImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: black;

    .card-image {
        height: 100%;
        width: 100%;
        display: none;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;