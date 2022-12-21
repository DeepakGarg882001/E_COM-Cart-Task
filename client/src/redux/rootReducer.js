import { combineReducers } from "redux";
import CartData from "./reducers/CartData";
import ProductData from "./reducers/ProductDataReducer";
import userReducer from "./reducers/userReducer";


const RootReducer= combineReducers(
    {
        CartData,
        ProductData,
        userReducer,
    }
    );

export default RootReducer;    