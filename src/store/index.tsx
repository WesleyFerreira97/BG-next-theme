import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "src/reduceres/rootReducer";
import { persistStore } from "redux-persist";

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };