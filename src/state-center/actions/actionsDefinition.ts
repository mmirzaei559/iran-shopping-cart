import { Product } from '../../interfaces/index';
import { ActionType } from '../../interfaces';

interface stackingProductsInStore_Action {
    type: ActionType.STACKING_PRODUCTS_IN_STORE;
    payload: Product[];
}

interface addProductToCart_Action {
    type: ActionType.ADD_PRODUCT_TO_CART;
    payload: {
        product: Product;
        quantity: number;
    };
}

interface removeProductFromCart_Action {
    type: ActionType.REMOVE_PRODUCT_FROM_CART;
    payload: number;
}

interface increaseQuantityInCart_Action {
    type: ActionType.INCREASE_QUANTITY_IN_CART;
    payload: number;
}

interface decreaseQuantityInCart_Action {
    type: ActionType.DECREASE_QUANTITY_IN_CART;
    payload: number;
}

export type Action =
    | stackingProductsInStore_Action
    | addProductToCart_Action
    | removeProductFromCart_Action
    | increaseQuantityInCart_Action
    | decreaseQuantityInCart_Action;
