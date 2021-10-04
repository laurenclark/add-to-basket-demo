/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProducts
// ====================================================

export interface getProducts_products {
  __typename: "products";
  id: string;
  name: string | null;
  nutrients: any | null;
  price: any | null;
}

export interface getProducts_currency {
  __typename: "currency";
  id: string;
}

export interface getProducts {
  /**
   * fetch data from the table: "products"
   */
  products: getProducts_products[];
  /**
   * fetch data from the table: "currency"
   */
  currency: getProducts_currency[];
}
