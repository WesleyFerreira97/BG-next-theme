import styled from 'styled-components';

export const GridContainer = styled.div`
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    background-color: blue;
    overflow: hidden;
`;

export const GridItem = styled.div`
    flex: 0 0 auto;
    width: 33.33333333%;
    display: flex;
    background-color: blue;

    > * {
        width: 100%;
    }
`;