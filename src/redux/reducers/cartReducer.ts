import { Action } from '../actions/actionsDefinition';
import { Product, State } from '../types/index';

const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
};

const CartReducer = (state: State = initState, action: Action) => {
    //  let findPro;
    //  let index;
    //  switch (action.type) {
    //   case 'ADD_TO_CART':
    //    const {productInCart, quantity} = action.payload;
    //    const check = state.products.find(pr => pr.id === productInCart.id);
    //    if (check) {
    //     return state;
    //    } else {
    //     const Tprice = state.totalPrice + productInCart.price * quantity;
    //     const Tquantities = state.totalQuantities + quantity;
    //     productInCart.quantity = quantity;
    //     return {
    //      ...state,
    //      products: [...state.products, productInCart],
    //      totalPrice: Tprice,
    //      totalQuantities: Tquantities
    //     }
    //    }
    //   case 'INC':
    //    findPro = state.products.find(product => product.id === action.payload);
    //    index = state.products.findIndex(product => product.id === action.payload);
    //    findPro.quantity += 1;
    //    state.products[index] = findPro;
    //    return {
    //     ...state,
    //     totalPrice: Number(state.totalPrice) + Number(findPro.price),
    //     totalQuantities: state.totalQuantities+1
    //    }
    //   case "DEC":
    //    findPro = state.products.find(product => product.id === action.payload);
    //    index = state.products.findIndex(product => product.id === action.payload);
    //    if(findPro.quantity > 1){
    //     findPro.quantity -= 1;
    //     state.products[index] = findPro;
    //     return {
    //      ...state,
    //      totalPrice: Number(state.totalPrice) - Number(findPro.price),
    //      totalQuantities: state.totalQuantities - 1
    //     }
    //    } else {
    //     return state;
    //    }
    //   case 'REMOVE':
    //    findPro = state.products.find(product => product.id === action.payload);
    //    const filtered = state.products.filter(product => product.id !== action.payload);
    //    return {
    //     ...state,
    //     products: filtered,
    //     totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
    //    }
    //   default:
    //    return state;
    //  }
};
export default CartReducer;
