import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const signin = createAsyncThunk("signin", async (credentials) => {
    try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});


function hello(){
        console.log('askdhasjdh')
}


const signinSlice = ({
    name:"signin",
    initialState:{
        isLoading:false,
        data:null,
        error:false,
    },
    reducer:{},
    extraReduces: (builder) => {
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
    }
})

export default signinSlice.reducer;