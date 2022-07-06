import { info } from 'console';
import React from 'react'
import styled from 'styled-components';

const GridContainer = styled.div`
    width: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    background-color: blue;
    overflow: hidden;
`;

const GridItem = styled.div`
    flex: 0 0 auto;
    width: 33.33333333%;
    display: flex;
    background-color: blue;

    > * {
        width: 100%;
    }
`;

const gridColSize = {
    1: '8.33333333%',
    2: '16.66666667%',
    3: '25%',
    4: '33.33333333%',
    5: '41.66666667%',
    6: '50%',
    7: '58.33333333%',
    8: '66.66666667%',
    9: '75%',
    10: '83.33333333%',
    11: '91.66666667%',
    12: '100%',
}


export function Grid(props: any) {
    console.log(props);

    if (props.container) {
        return (
            <GridContainer>
                {props.children}
            </GridContainer>
        )
    }

    return (
        <GridItem>
            {props.children}
        </GridItem>
    )
}




// Options

// 1* - Type ( Container Item)

// 2 - Direction ( Flex direction ) - Only Container
// 3 - Breakpoints ( xs, sm, md, lg, xl) - Only Item
// 4 - Gap - Only Item

