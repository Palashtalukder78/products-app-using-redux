import { combineReducers } from "redux";
import { selectedProduct, setProduct } from "./productReducer";

export const reducer = combineReducers({
    allProduct : setProduct,
    product : selectedProduct
})