import { useState, useEffect, createContext, FC } from "react";
import { useToggle } from "../hooks/useToggle";
import { gql, useQuery } from "@apollo/client";

interface BasketContext {
    product: {
        id: string;
    };
    isHidden: Boolean;
}

const BasketContext = createContext<Partial<BasketContext>>({});

const BasketProvider: FC = ({ children }) => {
    const { data, error } = useQuery(GET_UPPER_LIMIT_DATA);
    const [isHidden, setIsHidden] = useToggle(false);
    const [productsInBasket, setProductsInBasket] = useState([]);
    const [TULData, setTULData] = useState([]);

    useEffect(() => {
        if (error) {
            throw error;
        }
        setTULData(data);
    }, []);

    function addProductToBasket(product: any) {
        setIsHidden(false);
        // @ts-ignore
        setProductsInBasket((prevItems: any) => [...prevItems, product]);
    }

    function removeProductFromBasket(productId: string) {
        setProductsInBasket((prevItems: any) =>
            prevItems.filter((item: any) => item.id !== productId)
        );
    }

    // GET TUL LIMITS
    // ITERATE THROUGH EACH PRODUCT IN THE BASKET AND GET ITS NUTRIENT TOTALS
    // CHECK AGAINST TUL TOTALS
    // VALIDATE ON ALL CHANGES

    return (
        <BasketContext.Provider
            value={{
                // @ts-ignore
                addProductToBasket,
                removeProductFromBasket,
                setIsHidden,
                isHidden,
                productsInBasket
            }}>
            {children}
        </BasketContext.Provider>
    );
};

export { BasketProvider, BasketContext };

const GET_UPPER_LIMIT_DATA = gql`
    query GetUpperLimitData {
        tolerableUpperLimits {
            id
            unit
            amount
        }
    }
`;
