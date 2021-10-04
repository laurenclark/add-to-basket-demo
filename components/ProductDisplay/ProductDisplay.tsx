import { FC } from "react";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import dummyImage from "../../public/images/dummy-bottle.png";
import { ThreeDots } from "react-loading-icons";
import {
    brandPrimary,
    Loader,
    Button,
    Grid,
    ProductCard
} from "./ProductDisplayStyles";

const ProductDisplay: FC = () => {
    const { data, loading, error } = useQuery<GetProducts>(GET_PRODUCT_DATA);

    if (error) return <p>:( an error happened</p>;

    if (loading) {
        return (
            <Loader>
                <ThreeDots
                    fill={brandPrimary}
                    fillOpacity={1}
                    height="4em"
                    speed={1}
                    stroke="transparent"
                    strokeOpacity={1}
                    style={{
                        margin: "0 auto"
                    }}
                />
                <h3>Loading...</h3>
            </Loader>
        );
    }

    return (
        <Grid>
            {data &&
                data?.products.map((product: any) => (
                    <ProductCard key={product!.id}>
                        <strong>{product!.name}</strong> <br />
                        <Image
                            blurDataURL="../images/dummy-bottle-loader.png"
                            placeholder="blur"
                            width="189"
                            height="189"
                            src={dummyImage}
                        />
                        {product.price.toLocaleString("en-gb", {
                            style: "currency",
                            currency: data?.currency[0].id
                        })}
                        <Button>Add to Basket</Button>
                    </ProductCard>
                ))}
        </Grid>
    );
};

export default ProductDisplay;

export interface GetProducts_products {
    __typename: "products";
    id: string;
    name: string | null;
    nutrients: any | null;
    price: any | null;
}

export interface GetProducts_currency {
    __typename: "currency";
    id: string;
}

export interface GetProducts {
    products: GetProducts_products[];
    currency: GetProducts_currency[];
}

const GET_PRODUCT_DATA = gql`
    query GetProductData {
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