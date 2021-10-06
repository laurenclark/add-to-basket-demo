import React, { FC, useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import { NavContainer, VitlLogo, CartIcon } from "./NavigationStyles";

const Navigation: FC = () => {
    // @ts-ignore
    const { setIsHidden, productsInBasket } = useContext(BasketContext);
    return (
        <NavContainer>
            <VitlLogo src="../images/vitl_logo.svg" alt="Vitl Logo" />
            <CartIcon onClick={setIsHidden}>
                <img
                    width="20"
                    height="20"
                    src="../images/icon-cart.svg"
                    alt="Line icon showing a cart"
                />
                {productsInBasket.length > 0 && (
                    <span>{productsInBasket.length}</span>
                )}
            </CartIcon>
        </NavContainer>
    );
};

export default Navigation;