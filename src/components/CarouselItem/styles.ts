import styled from "styled-components";

export const CarouselItemWrap = styled.div`
    height: 75vh;
    position: relative;
    display: block;
    /* background-color: ${props => props.theme.colors.primary}; */
    background: linear-gradient(0deg, rgba(255, 0, 150, 0.6), rgba(255, 0, 150, 0.6)), url('https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    overflow: hidden;
    background-size: cover;
    background-position: .5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;


    .opa {
        height: 100%;
        width: 100%;
        background-color: blue;
    }
`

export const MainContentImage = styled.div`
    /* height: 100%;
    width: 100%;
    z-index: 30;
    position: absolute; */
`;