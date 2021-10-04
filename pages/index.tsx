import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { gql, useQuery } from "@apollo/client";
import dummyImage from "../public/images/dummy-bottle.png";
import { GetProducts } from "./__generated__/GetProducts";
import { Main, Grid, ProductCard, Button } from "./indexStyles";

const FetchProductsWithCurrency = gql`
    query fetchProductsWithCurrency {
        products {
            id
            name
            nutrients
            price
        }
        currency {
            id
        }
    }
`;

const Home: NextPage = () => {
    const { data, loading, error } = useQuery<GetProducts>(
        FetchProductsWithCurrency
    );

    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }

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
                    {loading && <div>Loading...</div>}
                    {data &&
                        data!.products.map((product: any) => (
                            <ProductCard key={product!.id}>
                                <strong>{product!.name}</strong> <br />
                                <Image
                                    blurDataURL="../images/dummy-bottle-loader.png"
                                    placeholder="blur"
                                    width="189"
                                    height="189"
                                    src={dummyImage}
                                />
                                {product!.price.toLocaleString("en-gb", {
                                    style: "currency",
                                    currency: data.currency[0].id
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
