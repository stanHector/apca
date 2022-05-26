import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";
import Aggregation from "../../services/aggregationServices";

export const aggregationPost = createAsyncThunk(
  "aggregation/post",
    async ({ data, ffyPeriodYear, id, type }, thunkAPI) => {
      console.log(data, ffyPeriodYear, id, type);
    try {
      const response = await Aggregation.aggregationCall(
        data,
        ffyPeriodYear,
        id,
        type
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const AggregateSlice = createSlice({
  name: "aggregation",
    initialState: {
        data: {},
  },
  extraReducers: {
    [aggregationPost.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [aggregationPost.rejected]: (state, action) => {
        state.data = {};
    },
  },
});
const { reducer } = AggregateSlice;
export default reducer;
