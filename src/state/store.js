import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import productReducer from './counter/productSlice';
import authReducer from './counter/authSlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        product:productReducer,
        signin:authReducer
    }
})


