import { actionTypes } from "../contant/actionType";

const initialState = {
    products: []
}

export const setProduct = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_PRODUCT:
            return {...state, products:payload}
        default:
            return state
    }
}
export const selectedProduct = (state = {}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case actionTypes.REMOVE_FROM_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}