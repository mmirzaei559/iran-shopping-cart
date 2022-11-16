import { Action } from '../actions/actionsDefinition';
import { ActionType, State } from '../../interfaces/index';

const initState = {
    products: [],
    itemsInCart: [],
    totalPrice: 0,
    totalQuantitie: 0,
};

const reducer = (state: State = initState, action: Action) => {
    switch (action.type) {
        case ActionType.STACKING_PRODUCTS_IN_STORE:
            return {
                ...state,
                products: action.payload,
            };
        case ActionType.ADD_PRODUCT_TO_CART:
            const { product, quantity } = action.payload;
            const check = state.itemsInCart.find((pr) => pr.id === product.id);
            if (check) {
                return state;
            } else {
                const totalPrice = state.totalPrice + Number(product.price) * quantity;
                const totalQuantitie = state.totalQuantitie + quantity;
                product.quantity = quantity;
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart, product],
                    totalPrice,
                    totalQuantitie,
                };
            }
        case ActionType.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
            };
        case ActionType.INCREASE_QUANTITY_IN_CART:
            return {
                ...state,
            };
        case ActionType.DECREASE_QUANTITY_IN_CART:
            return {
                ...state,
            };
        default:
            return state;
    }
};
export default reducer;

// {

//      let findPro;
//      let index;
//      switch (action.type) {
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
//       case 'INC':
//        findPro = state.products.find(product => product.id === action.payload);
//        index = state.products.findIndex(product => product.id === action.payload);
//        findPro.quantity += 1;
//        state.products[index] = findPro;
//        return {
//         ...state,
//         totalPrice: Number(state.totalPrice) + Number(findPro.price),
//         totalQuantities: state.totalQuantities+1
//        }
//       case "DEC":
//        findPro = state.products.find(product => product.id === action.payload);
//        index = state.products.findIndex(product => product.id === action.payload);
//        if(findPro.quantity > 1){
//         findPro.quantity -= 1;
//         state.products[index] = findPro;
//         return {
//          ...state,
//          totalPrice: Number(state.totalPrice) - Number(findPro.price),
//          totalQuantities: state.totalQuantities - 1
//         }
//        } else {
//         return state;
//        }
//       case 'REMOVE':
//        findPro = state.products.find(product => product.id === action.payload);
//        const filtered = state.products.filter(product => product.id !== action.payload);
//        return {
//         ...state,
//         products: filtered,
//         totalPrice: state.totalPrice - findPro.price * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
//        }
//       default:
//        return state;
//      }
// };
// export default CartReducer;
