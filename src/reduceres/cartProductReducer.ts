import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { CartDataProps } from 'src/types/cartTypes';

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as CartDataProps[],
    reducers: {
        add(state, action: PayloadAction<CartDataProps>) {
            const cart = action.payload;

            state.push(cart)
        },
        remove(state, action: PayloadAction<number>) {
            const selectedItem = action.payload;

            state.splice(selectedItem, 1);
        },
        clear() {
            return []
        }
    }
});

const cartReducer = cartSlice.reducer;
const { add, remove, clear } = cartSlice.actions;

export { cartReducer, add, remove, clear }
