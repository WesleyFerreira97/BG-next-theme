import { globalCss } from "stitches.config";

export const globalStyles = globalCss({
    "@font-face": [
        {
            fontFamily: "Aquire",
            src: "local('Aquire'), url('/public/fonts/Aquire-BW0ox.otf')",
            fontStyle: "normal",
            fontWeight: "800",
        },
        {
            fontFamily: "Poppins",
            src: "local('Poppins'), url('/public/fonts/Poppins-Medium.ttf'), format('otf')",
            fontStyle: "normal",
            fontWeight: "800",
        }
    ],


    "*, body, html": {
        margin: "0",
        padding: "0",
        border: "0",
        listStyle: "none",
        fontFamily: "Arial",
        fontSize: "16px",
        boxSizing: "border-box",
    },

    a: {
        color: "inherit",
        textDecoration: "none",
    },

    "ul, li": {
        margin: "0",
    },

    ".swiper-button-prev, .swiper-button-next": {
        marginTop: "-40px",
        borderRadius: "6px",
        padding: "20px",
        paddingTop: "40px",
        paddingBottom: "40px",
        color: "#E4DCCF !important",
        fill: "#E4DCCF 0.5 !important",
        opacity: ".3",
    },
    ".swiper-pagination-bullet": {
        color: "red !important",
    }
});





// /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap'); */


// @font-face {
//     font-family: 'Britney';
//     src: url('/fonts/Britney-Hills.otf'),
//         url('/fonts/Britney-Hills.otf'), format('otf');
//     font-style: normal;
//     font-weight: 800;
// }



// /* Ajusts For Responsivity */
// @media (max-width: 1024px) {
//     html {
//         font-size: 93.75%;
//     }
// }

// @media (max-width: 768px) {
//     html {
//         font-size: 87.5%;
//     }
// }

