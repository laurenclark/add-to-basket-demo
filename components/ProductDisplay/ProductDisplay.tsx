import { FC, useContext } from "react";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import dummyImage from "../../public/images/dummy-bottle.png";
import { BasketContext } from "../../context/basketContext";
import { ThreeDots } from "react-loading-icons";
import { currencyFormat } from "../../lib/helpers";
import {
    brandPrimary,
    Loader,
    Button,
    Grid,
    ProductName,
    ProductCard
} from "./ProductDisplayStyles";

const ProductDisplay: FC = () => {
    const { data, loading, error } = useQuery<GetProducts>(GET_PRODUCT_DATA);
    // @ts-ignorew
    const { changeProductQuantity, setIsHidden, setProductsInBasket } =
        useContext(BasketContext);

    if (error)
        return (
            <h2>
                😱 an error ocurred while <pre>Fetching Products</pre> please
                check your internet connection, and refresh the page.
            </h2>
        );

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

    function addProductToBasket(product: any, quantity: number = 1) {
        const newProduct = { ...product, quantity };
        setIsHidden(false);
        setProductsInBasket((prev) => [...prev, newProduct]);
    }

    return (
        <Grid>
            {data &&
                data!.products.map((product: any) => (
                    <ProductCard key={product!.id}>
                        <ProductName>{product!.name}</ProductName>
                        <div className="image-center">
                            <Image
                                blurDataURL="../images/dummy-bottle-loader.png"
                                placeholder="blur"
                                width="250"
                                height="250"
                                alt={`Image of a vitamin bottle with the title ${
                                    product!.name
                                }`}
                                layout="intrinsic"
                                title="Dummy bottle image"
                                src={dummyImage}
                            />
                        </div>
                        <p className="price-display">
                            {currencyFormat(product.price)}
                        </p>
                        <Button onClick={() => addProductToBasket(product)}>
                            Add to Basket
                        </Button>
                    </ProductCard>
                ))}
        </Grid>
    );
};

export default ProductDisplay;

interface GetProducts_products {
    __typename: "products";
    id: string;
    name: string | null;
    nutrients: [] | null;
    price: number | null;
    quantity: number | null;
}

interface GetProducts_currency {
    __typename: "currency";
    id: string;
}

interface GetProducts {
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
