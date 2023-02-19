import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./logic"
export default configureStore({
    reducer:{
        count:countReducer,
    }
})