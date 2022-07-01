// import { Html, Head, Main, NextScript } from 'next/document'
// import { renderToString } from 'react-dom/server';
// import { ServerStyleSheet } from 'styled-components';

// export default function Document() {
//     const sheet = new ServerStyleSheet();
//     try {
//         const html = renderToString(sheet.collectStyles(<Main />));
//         const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
//     } catch (error) {
//         // handle error
//         console.error(error);
//     } finally {
//         sheet.seal();
//     }

//     return (
//         <Html>
//             <Head>
//                 <link
//                     rel="preload"
//                     href="/fonts/Aquire-BW0ox.otf"
//                     as="font"
//                     type="font/otf"
//                     crossOrigin=""
//                 />
//             </Head>
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     )
// }







import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GlobalStyle } from "../styles/Global";

class MyDocument extends Document {
    //--------------For styled-components only------------//
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport"
                        content="width=device-width, height=device-height, initial-scale=1"></meta>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                    {/* <link
                        rel="preload"
                        href="/fonts/Aquire-BW0ox.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/AquireBold-8Ma60.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    /> */}

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
