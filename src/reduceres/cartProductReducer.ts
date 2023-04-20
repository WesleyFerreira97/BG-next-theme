import { createSlice } from '@reduxjs/toolkit';
import type { OrderDataProps } from "src/components/SingleProduct";

type OrderData = {
    order: OrderDataProps
}
// const initialState: any = {
//     productTitle: "initial Title",
//     price: 0,
//     selectedColor: "initial Color",
//     selectedSize: "initial Size",
// };

const orderSlice = createSlice({
    name: "order",
    initialState: [],
    reducers: {
        newOrder(state: any, action: any) {
            const order = action.payload;

            state.push(action.payload)
        }
    }
});

export const orderReducer = orderSlice.reducer;

export const { newOrder } = orderSlice.actions;


