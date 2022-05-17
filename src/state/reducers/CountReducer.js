import { createSlice } from "@reduxjs/toolkit";

export const CountReducer = createSlice({
    name: "count",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count++;
        }
    }
});

export default CountReducer.reducer