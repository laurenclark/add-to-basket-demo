import React, { FC } from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
    background-color: #fff;
    box-shadow: 0 0.3px 0.3px rgb(0 0 0 / 2%), 0 0.9px 0.9px rgb(0 0 0 / 3%),
        0 1.8px 1.8px rgb(0 0 0 / 4%), 0 3.7px 3.7px rgb(0 0 0 / 5%),
        0 10px 10px rgb(0 0 0 / 7%);
    display: flex;
    justify-content: space-between;
    padding: 1rem calc((100vw - 1200px - 1rem) / 2);
    position: relative;
    height: 75px;
`;

const VitlLogo = styled.img`
    position: absolute;
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 60px;
    height: auto;
    padding-top: 6px;
`;

const CartIcon = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 30px;
    margin-right: 30px;
    cursor: pointer;
    margin-top: 9px;
    right: 12vw;
    img {
        width: 20px;
    }
    span {
        position: absolute;
        bottom: -5px;
        right: -8px;
        background: #46bc8f;
        border-radius: 100%;
        font-size: 13px;
        line-height: 12px;
        width: 14px;
        height: 14px;
        color: #fff;
        text-align: center;

        @media screen and (min-width: 992px) {
            line-height: 16px;
            width: 18px;
            height: 18px;
            bottom: -10px;
            right: -10px;
        }
    }
`;

const Navigation: FC = () => {
    return (
        <NavContainer>
            <VitlLogo src="../images/vitl_logo.svg" alt="Vitl Logo" />
            <CartIcon>
                <img
                    src="../images/icon-cart.svg"
                    alt="Line icon showing a cart"
                />
                <span> 3</span>
            </CartIcon>
        </NavContainer>
    );
};

export default Navigation;
