import { combineReducers } from "@reduxjs/toolkit";
import { orderReducer } from "./cartProductReducer";
import { checkoutReducer } from "./checkoutReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["order", "checkoutState"],
}

const reduceres = combineReducers({
    order: orderReducer,
    checkoutState: checkoutReducer
});

const rootReducer = persistReducer(persistConfig, reduceres);
type RootReducerTypes = ReturnType<typeof reduceres>;

export { rootReducer, persistConfig };
export type { RootReducerTypes };