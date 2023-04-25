import { combineReducers } from "@reduxjs/toolkit";
import { orderReducer } from "./cartProductReducer";
import { checkoutReducer } from "./checkoutReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const persistConfig = {
    key: "root",
    storage,
    whitelist: ["checkoutState"]
}

const reduceres = combineReducers({
    order: orderReducer,
    checkoutState: checkoutReducer
});

export const rootReducer = persistReducer(persistConfig, reduceres);
