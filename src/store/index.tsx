import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "src/reduceres/rootReducer";
import { persistStore } from "redux-persist";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor, useAppSelector };