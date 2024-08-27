import { ReactNode } from "react";

type ItemTypeProps = "color" | "label";

type ToggleGroupProps = {
    name: string;
    itemType: ItemTypeProps;
    children: ReactNode;
}

type GroupItemProps = {
    value: string;
    label?: string;
    available?: boolean;
    itemType?: "color" | "label";
    color?: string
}

type StatusColorProps = {
    [key: string]: {
        active: string;
        inactive: string;
    }
}


export type {
    ItemTypeProps,
    ToggleGroupProps,
    GroupItemProps,
    StatusColorProps
}
