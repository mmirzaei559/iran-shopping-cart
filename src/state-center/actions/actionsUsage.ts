import { Dispatch } from 'redux';
import { ActionType, Product } from '../../interfaces';
import { Action } from './actionsDefinition';

export const stackingProductsInState = (products: Product[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.STACKING_PRODUCTS_IN_STORE,
            payload: products,
        });
    };
};

export const addProductToCart = (product: Product, quantity: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_PRODUCT_TO_CART,
            payload: {
                product,
                quantity,
            },
        });
    };
};

export const increaseQuantityInCart = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREASE_QUANTITY_IN_CART,
            payload: id,
        });
    };
};

export const decreaseQuantityInCart = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREASE_QUANTITY_IN_CART,
            payload: id,
        });
    };
};

export const removeProductFromCart = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_PRODUCT_FROM_CART,
            payload: id,
        });
    };
};
