import styled from "styled-components";

export const CartDrawer = styled.div`
    min-width: 500px;
    width: 40vw;
    max-width: 100%;
    background-color: white;
    position: absolute;
    z-index: 5;
    right: 0;
    top: 0;
    position: fixed;
    height: 100vh;
    padding: 20px;
    overflow-y: auto;
    h2 {
        font-size: 48px;
        text-align: center;
    }
`;

export const CartBackground = styled.div`
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

export const CloseButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-family: Hurme, SofiaPro, Helvetica, Arial, Sans-Serif;
    cursor: pointer;
    transition: 0.3s color ease;
    color: #333;
    width: 40px;
    height: 40px;
    top: 20px;
    right: 40px;
`;

export const BasketListBG = styled.div`
    flex: 1;
    padding: 14px 13px 7px;
    text-align: left;
    font-family: SofiaPro, Helvetica, Arial, Sans-Serif;
    line-height: 1.2em;
    background: #fff9e0;
    display: flex;
    flex-direction: column;
    p {
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 0;
        font-weight: 800;
    }
`;

export const BasketControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    text-align: center;
    align-self: flex-end;
    font-size: 16px;
    margin-bottom: 1.5em;
    button {
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        height: 40px;
        width: 40px;
        cursor: pointer;
        border-radius: 0;
        &:focus {
            background: rgba(0, 0, 0, 0.1);
        }
    }
    div {
        flex: 0 0 40px;
        height: 40px;
        width: 40px;
        line-height: 2;
    }
`;

export const BasketUnorderedList = styled.ul`
    list-style: none;
    margin-bottom: 20px;
    padding: 20px;
`;

export const BasketItem = styled.li`
    display: flex;
    margin-bottom: 20px;
    position: relative;
`;

export const RemoveProductButton = styled.button`
    background: none;
    outline: none;
    font-size: 20px;
    font-family: Hurme, SofiaProBold, Helvetica, Arial, Sans-Serif;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #adaa9b;
    transition: 0.3s color ease;
    border: none;
`;
