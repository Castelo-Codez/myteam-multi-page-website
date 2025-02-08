import type {AppProps} from "next/app";
import {Livvic} from "next/font/google";
import Head from "next/head";
import "@/styles/globals.css";
import MainLayout from "@/components/MainLayout";
const livvic = Livvic({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});
export default function App({Component, pageProps}: AppProps) {
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
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </main>
        </>
    );
}
