import { combineReducers } from 'redux';
import CartReducer from './cartReducer';
import ProductsReducer from './productsReducer';

const reducers = combineReducers({
    CartReducer: CartReducer,
    ProductsReducer: ProductsReducer,
});

export type RootState = ReturnType<typeof reducers | any>;

export default reducers;
