import React, { useState, useEffect } from 'react';

import Head from "next/head";
import {Loader, Header, Footer} from "@warmhold:components";

interface MainProps {
    children: React.ReactNode
    title: string;
}

const Main = ({children, title}: MainProps) => {
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="Warmhold X" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://warmhold.ru/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <title>{title}</title>
            </Head>

            <Header />

            <main className="app root-content">
                <Loader loaded={loaded}/>
                {children}
            </main>

            <Footer />

            <script src="/js/vendor/bootstrap.min.js" defer />
            <script src="/js/plugins/swiper-bundle.min.js"/>
            <script src="/js/plugins/glightbox.min.js"/>

            <script src="/js/script.js"></script>
        </>
    )
};

export default Main;