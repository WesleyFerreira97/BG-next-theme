import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import type { CartDataProps } from 'src/types/cartTypes';

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as CartDataProps[],
    reducers: {
        add(state, action: PayloadAction<CartDataProps>) {
            const order = action.payload;

            state.push(order)
        },
        remove(state, action: PayloadAction<number>) {
            const selectedItem = action.payload;

            console.log(state);
            state.splice(selectedItem, 1);

        }
    }
});


const cartReducer = cartSlice.reducer;
const { add, remove } = cartSlice.actions;

export { cartReducer, add, remove }