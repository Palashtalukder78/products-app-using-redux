import { actionTypes } from "../contant/actionType";


export const setProduct = (products) => {
    return {
        type : actionTypes.SET_PRODUCT,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type : actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeFromSelectedProduct = (product) => {
    return {
        type : actionTypes.REMOVE_FROM_SELECTED_PRODUCT,
    }
}