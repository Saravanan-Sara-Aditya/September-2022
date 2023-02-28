import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../Redux/cartSlice';
import cartUiSlice from "./cartUiSlice";
const cartStore = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer
    },
});
export default cartStore