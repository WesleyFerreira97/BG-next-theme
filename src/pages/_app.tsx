import type { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, NextUIProvider, Pagination } from "@nextui-org/react";
import { Footer } from "../components/Footer";
import { MainNavbar } from "../components/MainNavbar";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>Title Project</title>
                <meta
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                    name="viewport"
                />
            </Head>
            {/* <NextUIProvider> */}
            {/* <MainNavbar /> */}
            <Component {...pageProps} />
            {/* <Footer /> */}
            {/* </NextUIProvider> */}
        </>
    );
}

export default MyApp;

