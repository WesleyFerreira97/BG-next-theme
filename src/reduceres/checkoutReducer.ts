import { createSlice } from "@reduxjs/toolkit";
import type { OrderDataProps } from "src/components/SingleProduct";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: [],
    reducers: {
        currentCheckoutData(state: any, action: any) {
            const checkoutData = action.payload;
            console.log("inside checkout: ", checkoutData);

            state.push(checkoutData)
        }
    }
});

export const checkoutReducer = checkoutSlice.reducer;

export const { currentCheckoutData } = checkoutSlice.actions;