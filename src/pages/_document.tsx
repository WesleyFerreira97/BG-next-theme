import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: React.Children.toArray([initialProps.styles, sheet.getStyleElement()])
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-br">
                <Head>{CssBaseline.flush()}
                    <meta
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                        name="viewport"
                    />

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