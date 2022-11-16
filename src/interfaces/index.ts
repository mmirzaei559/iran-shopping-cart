export enum ActionType {
    STACKING_PRODUCTS_IN_STORE = 'STACKING_PRODUCTS_IN_STORE',
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
    INCREASE_QUANTITY_IN_CART = 'INCREASE_QUANTITY_IN_CART',
    DECREASE_QUANTITY_IN_CART = 'DECREASE_QUANTITY_IN_CART',
}

export interface Product {
    available: boolean;
    brand: string;
    id: number;
    name: string;
    options: ProductOption[];
    price: string;
    weight: number;
    image?: string;
    quantity?: number;
}
export interface ProductOption {
    color: string[] | string;
    power?: number[];
    storage?: string[];
    quantity: number;
}

export interface State {
    products: Product[];
    itemsInCart: Product[];
    totalPrice: number;
    totalQuantitie: number;
}

export interface Route {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}
