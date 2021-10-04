import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../context/basketContext";

const CartDrawer = styled.div`
    width: 500px;
    max-width: 100%;
    background-color: white;
    position: absolute;
    z-index: 5;
    right: 0;
    top: 0;
    position: fixed;
    height: 100vh;
    padding: 1em;
    h2 {
        font-size: 48px;
        text-align: center;
    }
`;

const CartBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.5);
    -webkit-animation: 0.5s modalFadeIn;
    animation: 0.5s modalFadeIn;
    overflow: hidden;
    @keyframes modalFadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const CloseButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-family: Hurme, SofiaProBold, Helvetica, Arial, Sans-Serif;
    cursor: pointer;
    transition: 0.3s color ease;
    color: #333;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 40px;
`;

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
                <div>
                    {productsInBasket.map((product: any) => (
                        <pre>{JSON.stringify(product, null, 4)}</pre>
                    ))}
                    ;
                </div>
            </CartDrawer>
        </>
    );
};

export default BasketPane;
