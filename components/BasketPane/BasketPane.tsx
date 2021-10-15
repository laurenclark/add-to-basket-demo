import React, { useContext, useEffect } from "react";
import Image from "next/image";
import dummyImage from "../../public/images/dummy-bottle.png";
import { BasketContext } from "../../context/basketContext";
import { currencyFormat } from "../../lib/helpers";
import {
    CartBackground,
    CartDrawer,
    CloseButton,
    BasketListBG,
    BasketControls,
    BasketItem,
    BasketUnorderedList,
    RemoveProductButton
} from "./BasketPaneStyles";

const BasketPane = () => {
    const {
        isHidden,
        // @ts-ignore
        setIsHidden,
        // @ts-ignore
        productsInBasket,
        // @ts-ignore
        setProductsInBasket,
        // @ts-ignore
        removeProductFromBasket,
        // @ts-ignore
        changeProductQuantity
    } = useContext(BasketContext);

    useEffect(() => {
        productsInBasket.length === 0 && setIsHidden(false);
    }, [productsInBasket]);

    useEffect(() => {
        productsInBasket.length === 0 && setIsHidden(!isHidden);
    }, []);

    const incrementProduct = (product: {}) => {
        // @ts-ignore
        setProductsInBasket((prev) => [
            ...prev.filter((item: any) => item.id !== product.id),
            { ...product, quantity: product.quantity + 1 }
        ]);
    };

    const decrementProduct = (product: {}) => {
        // @ts-ignore
        setProductsInBasket((prev: any) => [
            ...prev.filter((item: any) => item.id !== product.id),
            {
                ...product,
                quantity:
                    product.quantity > 1
                        ? product.quantity - 1
                        : // @ts-ignore
                          removeProductFromBasket(product.id)
            }
        ]);
    };

    return (
        <>
            <CartBackground onClick={setIsHidden} hidden={!isHidden} />
            <CartDrawer hidden={!isHidden}>
                <CloseButton onClick={setIsHidden}>×</CloseButton>
                <h2>Your Basket</h2>

                <BasketUnorderedList>
                    {productsInBasket.map((product: any) => (
                        <BasketItem key={product.id}>
                            <BasketListBG css={BGImageStyles}>
                                <div className="image-center">
                                    <Image
                                        blurDataURL="../images/dummy-bottle-loader.png"
                                        placeholder="blur"
                                        width="189"
                                        height="189"
                                        alt={`Image of a vitamin bottle with the title ${
                                            product!.name
                                        }`}
                                        title="Dummy bottle image"
                                        src={dummyImage}
                                    />
                                </div>
                            </BasketListBG>
                            <BasketListBG css={BGItemStyles}>
                                <p>{product.name}</p>
                                <RemoveProductButton
                                    aria-label={`Remove ${product.name} from basket`}
                                    onClick={() =>
                                        removeProductFromBasket(product.id)
                                    }>
                                    ×
                                </RemoveProductButton>
                                <BasketControls>
                                    <button
                                        aria-label={`Decrease ${product.name} by one`}
                                        onClick={() =>
                                            decrementProduct(product)
                                        }>
                                        -
                                    </button>
                                    <div>{product.quantity}</div>
                                    <button
                                        aria-label={`Increase ${product.name} by one`}
                                        onClick={() =>
                                            incrementProduct(product)
                                        }>
                                        +
                                    </button>
                                </BasketControls>
                                <p className="price-display">
                                    {currencyFormat(
                                        product.price * product.quantity
                                    )}
                                </p>
                            </BasketListBG>
                        </BasketItem>
                    ))}
                </BasketUnorderedList>
            </CartDrawer>
        </>
    );
};

const BGItemStyles = `
    padding: 26px 15px 16px 21px;
    `;
const BGImageStyles = `
    flex: 0 1 175px;
    margin-right: 2px;
    `;

export default BasketPane;
