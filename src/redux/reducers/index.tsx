import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductsReducer from "./ProductsReducer";
const reducers = combineReducers({
    CartReducer: CartReducer,
    ProductsReducer: ProductsReducer,
});
export type RootState = ReturnType<typeof reducers | any>

export default reducers;