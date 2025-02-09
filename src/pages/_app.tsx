import type {AppProps} from "next/app";
import {Livvic} from "next/font/google";
import Head from "next/head";
import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import type {ReactElement, ReactNode} from "react";
import type {NextPage} from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const livvic = Livvic({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});
export default function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <Head>
                <title>myteam multi-page</title>
                <meta
                    name="description"
                    content="my team multi-page | front end mentor challenges"
                />
            </Head>
            <main className={`${livvic.className} relative`}>
                {Component.getLayout ? (
                    getLayout(<Component {...pageProps} />)
                ) : (
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                )}
            </main>
        </>
    );
}
