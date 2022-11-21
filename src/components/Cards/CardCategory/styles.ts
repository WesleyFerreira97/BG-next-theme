import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { typography } from "../../../styles/typography";

export const CategoryCardWrap = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    aspect-ratio: 3/2;
    overflow: hidden;

    &:hover img {
        transform: scale(1.1);
        transition: .75s;
    }

    .card-info {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        z-index: 4;

        &__title {
            color: ${({ theme }) => theme.colors.neutral};
            ${typography.TitleSm}
            font-size: 2.5rem;
        }

        &__subtitle {
            ${typography.Text};
            color: ${({ theme }) => theme.colors.neutral};
            display: none;
        }
    }

    @media (min-width: ${theme.breakpoints.lg}) { 
        .card-info {
            &__title {
                font-size: 3rem;
            }
            &__subtitle {
                display: block;
            }
        }
    }
`;

export const CategoryBackground = styled.div`
    height: 130%;
    width: 115%;
    z-index: -1;
    position: absolute;

   @media (min-width: ${theme.breakpoints.lg}) {
        height: 100%;
        width: 100%;
   }
`;
