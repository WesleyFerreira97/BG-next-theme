import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CartDataProps } from "src/types/cartTypes";

type CheckoutProps = {
    data: CartDataProps
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {},
    reducers: {
        currentCheckoutData(state: any, action: PayloadAction<CheckoutProps>) {
            const checkoutData = action.payload;

            state.data = { ...checkoutData };
        }
    }
});

export const checkoutReducer = checkoutSlice.reducer;

export const { currentCheckoutData } = checkoutSlice.actions;