import { combineReducers } from "@reduxjs/toolkit";
import { orderReducer } from "./cartProductReducer";
import { checkoutReducer } from "./checkoutReducer";

export const rootReducer = combineReducers({
    order: orderReducer,
    checkoutState: checkoutReducer
})