import { createStore, combineReducers } from 'redux';
import ProductsReducer from '../reducers/productsReducer';
import CartReducer from '../reducers/cartReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
const root = combineReducers({
    ProductsReducer,
    CartReducer,
});

const store = createStore(root);
export default store;
