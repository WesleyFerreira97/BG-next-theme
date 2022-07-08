import React from 'react'
import styled from 'styled-components';
import { GridContainerWrap, GridItemWrap } from './styles';

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

export function GridContainer(props: any) {
    console.log('GridContainer');

    return (
        <GridContainerWrap>
            {props.children}
        </GridContainerWrap>
    )
}

export function GridItem(props: any) {
    console.log('GridItem');

    return (
        <GridItemWrap>
            {props.children}
        </GridItemWrap>
    )
}

export function Grid(props: any) {
    const Component = props.container ? GridContainer : GridItem;

    return <Component {...props} />
}


// Options

// 1* - Type ( Container Item)
// 2 - Breakpoints ( xs, sm, md, lg, xl) - Only Item
// 3 - Gap - Only Item

