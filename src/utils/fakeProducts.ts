import Woman1 from "../../public/images/woman1.png";
import Woman2 from "../../public/images/woman3.png";
import People1 from "../../public/images/woman3.png";
import People2 from "../../public/images/people2.jpg";
import People3 from "../../public/images/people3.jpg";
import { StaticImageData } from "next/image";

type CategorieDataProps = {
    title: string;
    slug: string;
    id: string;
    image: StaticImageData;
}

export const gridMainCategoriesData: CategorieDataProps[] = [
    {
        title: "Shorts",
        slug: "shorts",
        image: People1,
        id: "2e890581-4eb6-48e4-b80e-d5b48864bd28"
    },
    {
        title: "Conjuntos",
        slug: "conjuntos",
        image: People2,
        id: "18c5b8cb-daa7-428c-9b8e-66217623b91a"
    },
    {
        title: "Vestidos",
        slug: "vestidos",
        image: People3,
        id: "cb2336f6-cf61-42b5-a763-9618164e5c4d"
    }
];

export const fakeProducts = [
    {
        title: "Blusas",
        subTitle: "Other object, you can scale",
        description: "But like any other object, you can scale the object the Image fills.",
        price: 500,
        monthlyInstallments: "4x de R$ 122,00",
        categories: ["Camisas"],
        image: People1
    },
    {
        title: "Conjuntos",
        subTitle: "Other object, you can scale",
        description: "But like any other object, you can scale the object the Image fills. But like any other object, you can scale the object the Image fills But like any other object, you can scale the object the Image fills But like any other object, you can scale the object the Image fills",
        price: 130,
        monthlyInstallments: "4x de R$ 22,00",
        categories: ["Camisas"],
        image: People2
    },
    {
        title: "Vestidos",
        subTitle: "Other object, you can scale can scale",
        description: "But like any other object, you can scale the object the Image fills. ",
        price: 250,
        monthlyInstallments: "4x de R$ 32,00",
        categories: ["Camisas"],
        image: People3
    },
    {
        title: "VESTIDO DEAN OFF WHITE",
        subTitle: "Other object, you can scale",
        description: "But like any other object, you can scale the object the Image fills. ",
        price: 180,
        monthlyInstallments: "4x de R$ 40,00",
        categories: ["Camisas"],
        image: Woman2
    },
    {
        title: "BLUSA GRUMARI THRIFT PINK",
        subTitle: "Other object, you can scale, object like",
        description: "But like any other object, you can scale the object the Image fills. ",
        price: 80,
        monthlyInstallments: "4x de R$ 15,00",
        categories: ["Camisas"]
    },
    {
        title: "VESTIDO EMERYT BLUSH PINK",
        subTitle: "Other object, you can scale can scale",
        description: "But like any other object, you can scale the object the Image fills. ",
        price: 250,
        monthlyInstallments: "4x de R$ 15,00",
        categories: ["Camisas"]
    },
];


export const fakeCategories = [
    {
        title: "Blusas",
        subTitle: "25 Produtos",
        description: "But like any other object, you can scale the object the Image fills.",
        price: 500,
        monthlyInstallments: "4x de R$ 122,00",
        categories: ["25 Produtos"]
    },
    {
        title: "Camisetas",
        subTitle: "16 Produtos",
        description: "But like any other object, you can scale the object the Image fills.",
        price: 500,
        monthlyInstallments: "4x de R$ 122,00",
        categories: ["16 Produtos"]
    },
    {
        title: "Conjuntos",
        subTitle: "29 Produtos",
        description: "But like any other object, you can scale the object the Image fills.",
        price: 500,
        monthlyInstallments: "4x de R$ 122,00",
        categories: ["29 Produtos"]
    },
    {
        title: "Outros",
        subTitle: "85 Produtos",
        description: "But like any other object, you can scale the object the Image fills.",
        price: 500,
        monthlyInstallments: "4x de R$ 122,00",
        categories: ["85 Produtos"]
    },
    {
        title: "Sandalias",
        subTitle: "17 Produtos",
        description: "But like any other object, you can scale the object the Image fills.",
        price: 500,
        monthlyInstallments: "4x de R$ 122,00",
        categories: ["17 Produtos"]
    },
];

export const carouselItemsData = {
    item1: {
        title: "Conjuntos",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        image: Woman1,
        buttons: {
            seeMore: "see something",
            previewButton: "preview",
        },
    },
    item2: {
        title: "Regatas",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        image: Woman2,
        buttons: {
            seeMore: "see something",
            previewButton: "preview",
        },
    },
    item3: {
        title: "Camisas",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        image: Woman1,
        buttons: {
            seeMore: "see something",
            previewButton: "preview",
        },
    },
};
