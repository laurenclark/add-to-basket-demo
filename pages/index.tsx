import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { gql } from "@apollo/client";
import styled from "styled-components";
import client from "../lib/apolloClient";
import dummyImage from "../public/images/dummy-bottle.png";

const Main = styled.main`
    margin: 2rem auto 4rem;
    max-width: 90vw;
    width: 1200px;
    h1 {
        @media screen and (min-width: 992px) {
            max-width: 450px;
            font-size: 2.5vw;
            line-height: 1.2;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    grid-gap: 1rem;
`;

const ProductCard = styled.div`
    padding: 1.3em;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
`;

const Button = styled.button`
    position: relative;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    min-width: 160px;
    cursor: pointer;
    outline: 0 !important;
    transition: 0.2s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: inline-flex;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 18px;
    background-color: #ffd326;
    border: none;
    &:hover {
        color: #333;
        box-shadow: 0 0.4px 0.4px rgb(0 0 0 / 2%), 0 1px 1px rgb(0 0 0 / 3%),
            0 2.1px 2.1px rgb(0 0 0 / 4%), 0 4.4px 4.4px rgb(0 0 0 / 5%),
            0 12px 12px rgb(0 0 0 / 7%);
    }
`;

const Home: NextPage = ({ products }: any) => {
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
                <Grid>
                    {products.map((product: []) => (
                        <ProductCard key={product!.id}>
                            <strong>{product!.name}</strong> <br />
                            <Image
                                blurDataURL="../public/images/dummy-bottle-loader.png"
                                placeholder="blur"
                                width="189"
                                height="189"
                                src={dummyImage}
                            />
                            {product.price.toLocaleString("en-gb", {
                                style: "currency",
                                currency: "GBP"
                            })}
                            <Button>Add to Basket</Button>
                        </ProductCard>
                    ))}
                </Grid>
            </Main>
            <Footer />
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
            query GetProducts {
                products {
                    id
                    name
                    nutrients
                    price
                }
            }
        `
    });
    return {
        props: {
            products: data.products
        }
    };
}
