import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
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
                <title>Bela Garota</title>
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

