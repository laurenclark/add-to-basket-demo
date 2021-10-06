import { useState, useEffect, createContext, FC } from "react";
import { useToggle } from "../hooks/useToggle";
import { gql, useQuery } from "@apollo/client";

interface BasketContext {
    product: {
        id: string;
    };
    isHidden: Boolean;
}

interface Nutrients {
    id: string;
    amount: number;
}

const BasketContext = createContext<Partial<BasketContext>>({});

const BasketProvider: FC = ({ children }) => {
    const { data: TULData, loading, error } = useQuery(GET_UPPER_LIMIT_DATA);
    const [isHidden, setIsHidden] = useToggle(false);
    const [productsInBasket, setProductsInBasket] = useState([]);

    if (error) {
        throw error;
    }

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

        // @ts-ignore

        console.log(validateTUL(newProductArray));
        return newProductArray;
    }

    function removeProductFromBasket(productId: string) {
        setProductsInBasket((prevItems: any) =>
            prevItems.filter((item: any) => item.id !== productId)
        );
    }

    function validateTUL(productsArray: any) {
        const nutrientsInBasket = productsArray
            .map(({ nutrients, quantity }: any) => [
                JSON.parse(nutrients).map(({ amount, id }: Nutrients) => {
                    return {
                        id: amount * quantity
                    };
                })
            ])
            .flat(2);

        const combineDuplicateNutrients = Array.from(
            nutrientsInBasket.reduce(
                (accumulator: any, { id, amount }: any) =>
                    accumulator.set(id, (accumulator.get(id) ?? 0) + amount),
                new Map()
            ),
            ([id, amount]) => ({ id, amount })
        );

        // @ts-ignore
        return ":(";
        // return combineDuplicateNutrients;
    }

    function getTotalQuantities(productsArray = productsInBasket) {
        return productsArray.reduce((accumulator, current) => {
            // @ts-ignore
            return accumulator + current!.quantity;
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
