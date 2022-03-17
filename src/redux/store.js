import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slicers/postSlice";

export const store = configureStore({
    reducer : {
        post : postReducer
    }
})
