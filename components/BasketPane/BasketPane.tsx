import React, { useContext } from "react";
import Image from "next/image";
import dummyImage from "../../public/images/dummy-bottle.png";
import { BasketContext } from "../../context/basketContext";
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
    // @ts-ignore
    const { isHidden, setIsHidden, productsInBasket } =
        useContext(BasketContext);

    return (
        <>
            <CartBackground onClick={setIsHidden} hidden={!isHidden} />
            <CartDrawer hidden={!isHidden}>
                <CloseButton onClick={setIsHidden}>×</CloseButton>
                <h2>Your Basket</h2>

                <BasketUnorderedList>
                    {productsInBasket.map((product: any) => (
                        <BasketItem>
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
                                <RemoveProductButton>×</RemoveProductButton>
                                <BasketControls>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </BasketControls>
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
