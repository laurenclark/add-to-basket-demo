import { useState, useEffect, createContext, FC } from "react";
import { useToggle } from "../hooks/useToggle";
import { gql, useQuery } from "@apollo/client";
import { toast } from "react-toastify";

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
    const { data: TULData, error } = useQuery(GET_UPPER_LIMIT_DATA);
    const [isHidden, setIsHidden] = useToggle(false);
    const [productsInBasket, setProductsInBasket] = useState([]);

    if (error) {
        console.error(error);
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
                    if (validateTUL(newProductArray).length === 0) {
                        isSKUInBasket.quantity =
                            isSKUInBasket.quantity + quantity;
                    }
                    break;
            }
        } else {
            // @ts-ignore
            if (validateTUL(newProductArray).length === 0) {
                // @ts-ignore
                newProductArray.push({ ...product, quantity });
            }
        }
        if (validateTUL(newProductArray).length === 0) {
            console.log("New product");
            return newProductArray;
        } else {
            toast.error(
                `You have exceeded the maximum amounts of: ${validateTUL(
                    newProductArray
                )}`,
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                }
            );
            return productsInBasket;
        }
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
                        id,
                        amount: amount * quantity
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

        function comparisonArray() {
            var newArr: [] = [];
            TULData.tolerableUpperLimits.forEach((tul: any) => {
                combineDuplicateNutrients.forEach((noot: any) => {
                    if (tul.id === noot.id) {
                        if (noot.amount >= tul.amount) {
                            // @ts-ignore
                            newArr.push(noot.id);
                        }
                    }
                });
            });
            return newArr;
        }
        return comparisonArray();
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
