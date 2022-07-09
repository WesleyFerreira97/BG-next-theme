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

const getPropsByComponent = (componentName: string) => {
    console.log(componentName);

}

function GridContainer(props: GridContainerProps) {

    return (
        <GridContainerWrap>
            {props.children}
        </GridContainerWrap>
    )
}

function GridItem(props: any) {

    return (
        <GridItemWrap>
            {props.children}
        </GridItemWrap>
    )
}

export function Grid(props: any) {
    const Component = props.container ? GridContainer : GridItem;

    if (Component.name === 'GridItem') {
        getPropsByComponent('GridItem')
    }

    return <Component {...props} />
}


// Options

// 1* - Type ( Container Item)
// 2 - Breakpoints ( xs, sm, md, lg, xl) - Only Item
// 3 - Gap - Only Item

