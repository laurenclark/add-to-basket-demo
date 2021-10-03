/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products {
    __typename: "products";
    id: string;
    name: string | null;
    nutrients: any | null;
    price: any | null;
}

export interface GetProducts_currency {
    __typename: "currency";
    id: string;
}

export interface GetProducts {
    /**
     * fetch data from the table: "products"
     */
    products: GetProducts_products[];
    /**
     * fetch data from the table: "currency"
     */
    currency: GetProducts_currency[];
}
