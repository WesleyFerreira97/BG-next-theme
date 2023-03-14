
type CardInfoProps = {
    title: string,
    subtitle?: string,
    image: HTMLImageElement | string,
    link?: string,
    price?: number,
    monthlyInstallments?: string,
    categories?: string[]
}

type StyleProps =
    // | "background"
    | "aspectRatio"
    | "borderRadius"
    | "boxShadow";

type CardStyle = Record<StyleProps, string>;

type CardProps = {
    cardInfo: CardInfoProps,
    cardStyle?: Partial<CardStyle> & {
        // Refact: Identify token theme color
        bgColor?: string
    },
}

export type {
    CardProps
};