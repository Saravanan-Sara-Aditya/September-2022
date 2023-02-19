import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 }
    },
})
export const { increment, decrement } = slice.actions
export const data = (state) => state.count.value
export default slice.reducer