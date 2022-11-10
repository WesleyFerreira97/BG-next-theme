import { css } from "@stitches/react";
import React from "react";
import { GridItem } from "./GridItem";
import { GridWrap } from "./styles";
import { GridProps } from "./types";


function Grid({ children, ...props }: GridProps) {
    return (
        <GridWrap
            css={{
                gapXY: props.gap || 2,
                columns: props.columns || 4,
            }}
        >
            {children}
        </GridWrap>
    );
}

Grid.Item = GridItem;

export { Grid };

