import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10
}

// - The data flow from the Firebase database must be set up using async thunks.

export const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        decrement: (state) => {
            state.count += -1
        },
    }
})

export const { decrement } = queueSlice.actions

export default queueSlice.reducer