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

const CartPane = () => {
    // @ts-ignore
    const { isHidden, setIsHidden } = useContext(BasketContext);

    return (
        <>
            <CartBackground onClick={setIsHidden} hidden={!isHidden} />
            <CartDrawer hidden={!isHidden}></CartDrawer>
        </>
    );
};

export default CartPane;
