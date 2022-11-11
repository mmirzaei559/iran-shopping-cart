export enum ActionType {
    SELECT_PRODUCT = 'SELECT_PRODUCT',
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY',
    DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY',
}

export interface Product {
    available: boolean;
    brand: string;
    id: number;
    name: string;
    options: [];
    price: string;
    weight: number;
}

export interface State {
    products: Product[];
    totalPrice: number;
    totalQuantities: number;
}
