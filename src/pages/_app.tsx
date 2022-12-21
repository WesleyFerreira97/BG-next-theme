import type { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, NextUIProvider } from "@nextui-org/react";
import { Footer } from "../components/Footer";
import { MainNavbar } from "../components/MainNavbar";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { getCssText } from "stitches.config";




function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>Bela Garota</title>
                <meta
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                    name="viewport"
                />
            </Head>

            <NextUIProvider>
                {/* <MainNavbar /> */}
                <h1>Wesley</h1>
                <Component {...pageProps} />
                {/* <Footer /> */}
            </NextUIProvider>
        </>
    );
}

export default MyApp;

