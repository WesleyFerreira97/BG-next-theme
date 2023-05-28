import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { OrderDataProps } from 'src/types/cartTypes';

const orderSlice = createSlice({
    name: "order",
    initialState: [] as OrderDataProps[],
    reducers: {
        newOrder(state, action: PayloadAction<OrderDataProps>) {
            const order = action.payload;

            state.push(order)
        }
    }
});

export const orderReducer = orderSlice.reducer;

export const { newOrder } = orderSlice.actions;


