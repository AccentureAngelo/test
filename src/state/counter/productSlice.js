import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        isloading: false,
        data: null,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.isloading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodo.rejected, (state) => {
                state.isloading = false;
                state.error = true;
            });
    },
});

export default productSlice.reducer;
