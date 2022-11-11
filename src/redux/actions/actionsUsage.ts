import { Dispatch } from 'redux';
import { ActionType } from '../../types';
import { Action } from './actionsDefinition';

export const selectProduct = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECT_PRODUCT,
            payload: id,
        });
    };
};

export const increaseCartQuantity = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREASE_CART_QUANTITY,
            payload: id,
        });
    };
};

export const decreaseCartQuantity = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREASE_CART_QUANTITY,
            payload: id,
        });
    };
};

export const removeFromCart = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_FROM_CART,
            payload: id,
        });
    };
};
