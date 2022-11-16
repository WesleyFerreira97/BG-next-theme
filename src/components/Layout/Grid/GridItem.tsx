import React, { PropsWithChildren } from "react";
import { GridItemWrap } from "./styles";
import { GridProps } from "../../../types/grid";

export function GridItem({ children }: GridProps) {
    return (
        <GridItemWrap>
            {children}
        </GridItemWrap>
    );
}
