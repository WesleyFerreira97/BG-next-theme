import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { typography } from "../../../styles/typography";

export const CardWrap = styled.div`
    height: 100%;
    width: 100%;
    max-height: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    aspect-ratio: 4/6;
    overflow: hidden;

    &:hover img {
        transform: scale(1.1);
        transition: .75s;
    }

    .card-info {
        z-index: 4;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.2);

        &__title {
            color: ${({ theme }) => theme.colors.neutral};
            ${typography.TitleSm}
        }

        &__subtitle {
            ${typography.Text};
            color: ${({ theme }) => theme.colors.neutral};
            display: none;
        }
    }

    &:hover .card-info__title {
        transform: scaleX(1.1);
    }

    @media (min-width: ${theme.breakpoints.lg}) { 
        .card-info {
            &__subtitle {
                display: block;
            }
        }
    }
`;

export const CategoryBackground = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;

   @media (min-width: ${theme.breakpoints.lg}) {
        height: 100%;
        width: 100%;
   }
`;