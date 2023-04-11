import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "src/reduceres/rootReducer";

export const store = configureStore({
    reducer: rootReducer
});