import React, { FC, useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import { NavContainer, VitsLogo, CartIcon } from "./NavigationStyles";

const Navigation: FC = () => {
    // @ts-ignore
    const { setIsHidden, getTotalQuantities } = useContext(BasketContext);
    return (
        <NavContainer>
            <VitsLogo src="../images/vits_logo.svg" alt="Vits Logo" />
            <CartIcon onClick={setIsHidden}>
                <img
                    width="20"
                    height="20"
                    src="../images/icon-cart.svg"
                    alt="Line icon showing a cart"
                />
                {getTotalQuantities() > 0 && (
                    <span>{getTotalQuantities()}</span>
                )}
            </CartIcon>
        </NavContainer>
    );
};

export default Navigation;
