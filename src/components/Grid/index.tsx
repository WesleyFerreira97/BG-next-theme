import { info, log } from 'console';
import React, { ReactNode } from 'react'
import styled from 'styled-components';
import { GridContainerWrap, GridItemWrap } from './styles';

type GridContainerProps = {
    children: ReactNode,
    gap: number,
}

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

const gridItemProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
}

export function GridContainer(props: GridContainerProps) {
    console.log(props);

    return (
        <GridContainerWrap>
            {props.children}
        </GridContainerWrap>
    )
}

export function GridItem(props: any) {

    return (
        <GridItemWrap>
            {props.children}
        </GridItemWrap>
    )
}


export function Grid(props: any) {
    const propsByComponent = {}
    const Component = props.container ? GridContainer : GridItem;

    if (Component.name === 'GridItem') {
    }



    return <Component {...props} />
}


// Options

// 1* - Type ( Container Item)
// 2 - Breakpoints ( xs, sm, md, lg, xl) - Only Item
// 3 - Gap - Only Item

