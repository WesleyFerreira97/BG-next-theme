import type { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline, NextUIProvider, Pagination } from "@nextui-org/react";
import { Footer } from "../components/Footer";
import { MainNavbar } from "../components/MainNavbar";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { StoreProvider } from "src/providers/StoreProvider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "src/store";

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
            <StoreProvider>
                <PersistGate loading={null} persistor={persistor}>
                    <NextUIProvider>
                        <div style={{
                            overflowX: "hidden"
                        }}>
                            <Component {...pageProps} />
                            <Footer />
                        </div>
                    </NextUIProvider>
                </PersistGate>
            </StoreProvider>
        </>
    );
}

export default MyApp;

