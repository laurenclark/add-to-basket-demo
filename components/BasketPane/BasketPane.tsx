import React, { useContext } from "react";
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
        setIsHidden,
        productsInBasket,
        setProductsInBasket,
        removeProductFromBasket,
        changeProductQuantity
    } = useContext(BasketContext);

    const incrementProduct = (product: {}) => {
        setProductsInBasket(changeProductQuantity(product));
    };

    const decrementProduct = (product: {}) => {
        setProductsInBasket(changeProductQuantity(product, "minus"));
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
    flex: 0 1 150px;
    margin-right: 2px;
    `;

export default BasketPane;
