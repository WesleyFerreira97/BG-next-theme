import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { getCssText } from "stitches.config";
import { globalStyles } from "src/styles/Global";

export default function MyDocument() {
    globalStyles();

    return (
        <Html lang="pt-br">
            <Head>
                {CssBaseline.flush()}
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};