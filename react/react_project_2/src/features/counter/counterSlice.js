// Slice  = Actions + Reducer
import { createSlice } from "@reduxjs/toolkit";

const initialCount = 0;
const counterSlice = createSlice({
    name: "counterSlice",
    initialState: initialCount,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
        reset: () => {
            return 0;
        },
    },
})
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;