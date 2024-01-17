import { useDispatch } from 'react-redux';
import { add, remove } from 'src/reduceres/cartProductReducer';
import { CartDataProps } from 'src/types/cartTypes';

export function useCart() {
    const dispatch = useDispatch();

    const removeItem = (id: number) => {
        dispatch(remove(id));
    }

    const addItem = (values: CartDataProps) => {
        dispatch(add(values));
    }

    return { addItem, removeItem }
}
