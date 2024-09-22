import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { currentCheckoutData } from "src/reduceres/checkoutReducer";

export function useCheckout() {
    const router = useRouter();
    const dispatch = useDispatch();

    const checkoutNavigate = (values) => {
        dispatch(currentCheckoutData(values));
        router.push("/checkout");
    };

    return { checkoutNavigate };
}
