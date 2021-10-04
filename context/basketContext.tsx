import { useState, createContext, FC } from "react";
import { useToggle } from "../hooks/useToggle";

interface BasketContext {
    product: {};
    // @ts-ignore
    addProductToBasket: () => void;
    isHidden: Boolean;
}

const BasketContext = createContext<Partial<BasketContext>>({});

const BasketProvider: FC = ({ children }) => {
    const [isHidden, setIsHidden] = useToggle(false);
    const [productsInBasket, setProductsInBasket] = useState([]);

    const addProductToBasket = (product: {}) => {
        setIsHidden(false);
        // @ts-ignore
        setProductsInBasket((prevItems: any) => [...prevItems, product]);
    };

    return (
        <BasketContext.Provider
            value={{
                // @ts-ignore
                addProductToBasket,
                setIsHidden,
                isHidden,
                productsInBasket
            }}>
            {children}
        </BasketContext.Provider>
    );
};

export { BasketProvider, BasketContext };
