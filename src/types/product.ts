type ProductSizesNumber = {
    [key: number]: boolean | number;
}
export type ProductSizesLetter = {
    P: number | boolean,
    M: number | boolean,
    G: number | boolean,
    GG: number | boolean,
}

export type ProductTypes = ProductSizesNumber | ProductSizesLetter;

export type ProductProps = {
    id?: string,
    title: string,
    description?: string,
    categories?: string[],
    type_product_sizes?: string,
    // product_sizes: ProductTypes[],
    product_categories: string | number,
    sizes_available: any,
    price?: number,
    available: boolean,
    image: HTMLImageElement | string,
}

export type BucketProps = {
    bucket_name: string;
    bucket_folder: string;
}