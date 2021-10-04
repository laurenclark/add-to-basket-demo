import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer";
import styled from "styled-components";

const Main = styled.main`
    margin: 2rem auto 4rem;
    max-width: 90vw;
    width: 1200px;
    min-height: 50vh;
    h1 {
        @media screen and (min-width: 992px) {
            max-width: 450px;
            font-size: 2.5vw;
            line-height: 1.2;
        }
    }
`;

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Personalised nutrition from Vitl</title>
                <meta
                    name="description"
                    content="Feel 100% more often with filler-free, non-GMO nutritional supplements made from the highest quality vitamins &amp; minerals to keep your body functioning its best."
                />
                <link
                    rel="icon"
                    href="https://vitl.com/favicon.ico?v=00BoO63pAe"
                />
            </Head>
            <Navigation />
            <Main>
                <h1>Live life better with personalised nutrition</h1>
                <ProductDisplay />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
