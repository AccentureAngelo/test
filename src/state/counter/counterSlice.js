import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state) => {
            state.value +=1;
        },
        decrement:(state) => {
            state.value -=1;
        },
        incrementByAmount:(state, action) => {
            state.value += action.payload
        },

    },
    extraReducers:(builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("pending")
        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload;
        });
    
    }
})



export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount;
    }
)
export const { increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
