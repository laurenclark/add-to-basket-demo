import { useState, createContext, FC } from "react";
import { useToggle } from "../hooks/useToggle";
import { gql, useQuery } from "@apollo/client";
import { toast } from "react-toastify";

interface BasketContext {
    isHidden: Boolean;
    changeProductQuantity: () => number;
    removeProductFromBasket: () => void;
    getTotalQuantities: () => number;
    setIsHidden: () => boolean;
    setProductsInBasket: () => void | [];
}
interface Nutrients {
    id: string;
    amount: number;
}

interface Product {
    id: string;
    name: string;
    nutrients: [];
    quantity?: number | any;
}

type ProductsInBasket = [{ Product: Product }];

const BasketContext = createContext<Partial<BasketContext>>({});

const BasketProvider: FC = ({ children }) => {
    const { data: TULData, error } = useQuery(GET_UPPER_LIMIT_DATA);
    const [isHidden, setIsHidden] = useToggle(false);
    const [productsInBasket, setProductsInBasket] = useState([]);

    if (error) {
        console.error(error);
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
            TULData.tolerableUpperLimits.forEach((tul: Nutrients) => {
                combineDuplicateNutrients.forEach((nutrient: Nutrients) => {
                    if (tul.id === nutrient.id) {
                        if (nutrient.amount >= tul.amount) {
                            newArr.push(nutrient.id);
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
            return accumulator + current!.quantity;
        }, 0);
    }

    return (
        <BasketContext.Provider
            value={{
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
