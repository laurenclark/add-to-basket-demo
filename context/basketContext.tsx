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

    function changeProductQuantity(
        product: {},
        plusOrMinus: string = "plus",
        quantity: number = 1
    ) {
        const newProductArray = [...productsInBasket];
        const isSKUInBasket = newProductArray.find(
            // @ts-ignore
            (basketProduct: any) => basketProduct.name == product.name
        );

        if (isSKUInBasket) {
            switch (plusOrMinus) {
                case "minus":
                    // @ts-ignore
                    if (isSKUInBasket.quantity > 1) {
                        // @ts-ignore
                        isSKUInBasket.quantity =
                            // @ts-ignore
                            isSKUInBasket.quantity - quantity;
                    }
                    break;
                default:
                    // @ts-ignore
                    isSKUInBasket.quantity = isSKUInBasket.quantity + quantity;
                    break;
            }
        } else {
            // @ts-ignore
            newProductArray.push({ ...product, quantity });
        }
        return newProductArray;
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

    function getTotalQuantities(productsArray = productsInBasket) {
        return productsArray.reduce(function (prev, cur) {
            // @ts-ignore
            return prev + cur!.quantity;
        }, 0);
    }

    return (
        <BasketContext.Provider
            value={{
                // @ts-ignore
                changeProductQuantity,
                removeProductFromBasket,
                getTotalQuantities,
                setIsHidden,
                isHidden,
                productsInBasket,
                setProductsInBasket
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
