import { useState, createContext, FC } from "react";
import { useToggle } from "../hooks/useToggle";

interface BasketContext {
    product: {};
    // @ts-ignore
    addProductToBasket?: () => void;
    isHidden: Boolean;
}

const BasketContext = createContext<Partial<BasketContext>>({});

const BasketProvider: FC = ({ children }) => {
    const [isHidden, setIsHidden] = useToggle(false);
    const [productsInBasket, setProductsInBasket] = useState([]);

    const addProductToBasket = (product: {}) => {
        // @ts-ignore
        setProductsInBasket((prevItems: any) => [...prevItems, product]);
    };

    return (
        <BasketContext.Provider
            // @ts-ignore
            value={{ addProductToBasket, setIsHidden, isHidden }}>
            {children}
        </BasketContext.Provider>
    );
};

export { BasketProvider, BasketContext };
