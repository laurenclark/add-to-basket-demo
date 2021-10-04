import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

import { CSSProp } from "styled-components";

declare module "react" {
    interface Attributes {
        css?: CSSProp;
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />;
        </ApolloProvider>
    );
}
export default MyApp;
