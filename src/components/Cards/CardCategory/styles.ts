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
        z-index: 4;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;

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
        /* transform: scale(1.1); */
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
    height: 130%;
    width: 115%;
    z-index: -1;
    position: absolute;

   @media (min-width: ${theme.breakpoints.lg}) {
        height: 100%;
        width: 100%;
   }
`;