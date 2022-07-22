import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');
    
    @font-face {
        font-family: 'Aquire';
        src: url('/fonts/Aquire-BW0ox.otf'),
            url('/fonts/Aquire-BW0ox.otf'), format('otf');
        font-style: normal;
        font-weight: 800;
    }

     *, body, html {
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        /* font-family: Open-Sans, Helvetica, Sans-Serif; */
        font-family: Arial;
        box-sizing: border-box;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* Ajusts For Responsivity */
    @media (max-width: 1024px) {
        html {
            font-size: 93.75%;
        }
    }
    
    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }
`;


