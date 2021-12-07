import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Footer from "../components/Footer";
import styled from "styled-components";
import BasketPane from "../components/BasketPane/BasketPane";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Personalised nutrition from Vitl</title>
                <meta
                    name="description"
                    content="Feel 100% more often with filler-free, non-GMO nutritional supplements made from the highest quality vitamins &amp; minerals to keep your body functioning its best."
                />
            </Head>
            <Navigation />
            <Main>
                <h1>Live life better with personalised nutrition</h1>
                <ProductDisplay />
            </Main>
            <Footer />
            <BasketPane />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

const Main = styled.main`
    margin: 2rem auto 4rem;
    max-width: 90vw;
    width: 1200px;
    min-height: 60vh;
    h1 {
        @media screen and (min-width: 992px) {
            max-width: 450px;
            font-size: 2.5vw;
            line-height: 1.2;
        }
    }
`;

export default Home;
