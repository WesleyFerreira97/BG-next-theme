import { combineReducers } from "@reduxjs/toolkit";
import { orderReducer } from "./cartProductReducer";

export const rootReducer = combineReducers({
    order: orderReducer
})