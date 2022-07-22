import styled from "styled-components";

export const CarouselItemWrap = styled.div`
    height: 75vh;
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
    }
`
export const Title = styled.h1`
    font-size: 5rem;
    color: #fff;
    font-family: 'Aquire', sans-serif;
    font-weight: 800;
`;

export const Text = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    letter-spacing: .01rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.neutral};
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
