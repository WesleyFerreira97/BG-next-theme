import styled from "styled-components";
import { typography } from "../../styles/typography";

export const CarouselItemWrap = styled.div`
    height: 85vh;
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
    }
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.neutral};
    ${typography.TitleLg}
`;

export const Text = styled.h1`
    color: ${({ theme }) => theme.colors.neutral};
    ${typography.Text}
`;

export const Button = styled.h1`
    font-size: 3rem;
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
