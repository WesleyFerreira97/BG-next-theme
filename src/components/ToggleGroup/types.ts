import { ReactNode } from "react";

export type ToggleGroupProps = {
    name: string;
    itemType?: "color" | "label";
    children: ReactNode;
}

export type GroupItemProps = {
    value: string;
    label?: string;
    available?: boolean;
    itemType?: "color" | "label";
    color?: string
}

export type StatusColorProps = {
    [key: string]: {
        active: string;
        inactive: string;
    }
}
