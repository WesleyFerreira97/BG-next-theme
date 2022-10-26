import styled from "styled-components";
import { typography } from "../../styles/typography";

export const CarouselItemWrap = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;

    .item__content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        text-align: center;
        padding: 0 2rem;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.neutral};
    ${typography.TitleLg}
`;

export const Text = styled.h1`
    color: ${({ theme }) => theme.colors.neutral};
    ${typography.Text}
`;

export const Buttons = styled.div`
    height: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 2.5rem;

    .button__text {
        ${typography.TextLg}
        font-weight: 400;
        /* color: ${({ theme }) => theme.colors.neutralAlt};; */
        color: #000;

        &-outline {
            color: #fff;
            ${typography.TextLg}
        }
    }

    > * {
        border-radius: 0;
    }
`;

export const ImageBackground = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;

    > * {
        width: 100% !important;
        height: 100% !important;
    }
`;
