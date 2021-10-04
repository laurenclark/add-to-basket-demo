import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import { BasketProvider } from "../context/basketContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <BasketProvider>
                <Component {...pageProps} />
            </BasketProvider>
        </ApolloProvider>
    );
}
export default MyApp;
