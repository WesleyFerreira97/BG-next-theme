import styled, { css } from 'styled-components';

type GridItemProps = {
    container: string;
}

export const GridContainerWrap = styled.div`
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    background-color: blue;
    overflow: hidden;
`;

export const GridItemWrap = styled.div<GridItemProps>`
    flex: 0 0 auto;
    width: 33.33333333%;
    display: flex;
    background-color: blue;

    > * {
        width: 100%;
    }

    
    ${(props) =>
        props.container &&
        css`
        background-color: black;
    `
    }
`;