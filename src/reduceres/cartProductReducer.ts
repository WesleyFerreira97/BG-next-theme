import { createSlice } from "@reduxjs/toolkit";
import type { OrderDataProps } from "src/components/SingleProduct";

const initialState: OrderDataProps = {
    productTitle: "initial Title",
    price: 0,
    selectedColor: "initial Color",
    selectedSize: "initial Size",
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        newOrder(state: any, action) {
            const order = action.payload;
            console.log(action);

            // return state.push(order);
            state.order.push(order);
            // state.order = { ...state, price: 1000666559998 };

        }
    }
});

export const orderReducer = orderSlice.reducer;

export const { newOrder } = orderSlice.actions;