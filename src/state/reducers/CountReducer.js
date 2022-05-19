import { createSlice } from "@reduxjs/toolkit";


export const CountReducer = createSlice({
    name: "count",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
        
    },
    extraReducers: {}
});

export default CountReducer.reducer