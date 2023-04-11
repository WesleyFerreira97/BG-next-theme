import { Provider } from "react-redux";
import { store } from "../store";

type StoreProviderTypes = {
    children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderTypes) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}