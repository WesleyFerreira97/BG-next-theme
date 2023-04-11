import { createSlice } from "@reduxjs/toolkit";
import type { OrderDataProps } from "src/components/SingleProduct";

const orderSlice = createSlice({
    name: "orderData",
    initialState: null,
    reducers: {
        newOrder(state: any, action) {
            const order = action.payload;

            return state.push(order);
        }
    }
});

export const orderReducer = orderSlice.reducer;

export const { newOrder } = orderSlice.actions;