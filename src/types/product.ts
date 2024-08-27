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


type DefaultSizesValues = Array<string | number>;

const size_letter = ["P", "M", "G", "GG"];
const size_numeric = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];

function mapDefaultValues(value: DefaultSizesValues) {
    return value.reduce((prevItem, currentItem) => ({ ...prevItem, [currentItem]: false }), {});
}


export type ProductProps = {
    id?: string,
    title: string,
    description?: string,
    categories?: string[],
    type_product_sizes?: string,
    sizes_available: ProductTypes[],
    product_categories: string | number,
    // sizes_available: {
    //     letter: { [key: string]: boolean },
    //     numeric: { [key: string]: boolean },
    // },
    price?: number,
    available: boolean,
    image: HTMLImageElement | string,
}

export type BucketProps = {
    bucket_name: string;
    bucket_folder: string;
}

export type ProductWithBucketProps = ProductProps & BucketProps;