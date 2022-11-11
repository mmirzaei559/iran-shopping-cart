import Product from '../../interfaces/product';
import { ActionType } from '../types';

interface SelectProduct_Action {
    type: ActionType.SELECT_PRODUCT;
    payload: number;
}

interface IncreaseCartQuantity_Action {
    type: ActionType.INCREASE_CART_QUANTITY;
    payload: number;
}

interface DecreaseCartQuantity_Action {
    type: ActionType.DECREASE_CART_QUANTITY;
    payload: number;
}

interface AddToCart_Action {
    type: ActionType.ADD_TO_CART;
    payload: {
        product: Product;
        quantity: number;
    };
}

interface RemoveFromCart_Action {
    type: ActionType.REMOVE_FROM_CART;
    payload: number;
}

export type Action =
    | SelectProduct_Action
    | AddToCart_Action
    | IncreaseCartQuantity_Action
    | DecreaseCartQuantity_Action
    | RemoveFromCart_Action;
