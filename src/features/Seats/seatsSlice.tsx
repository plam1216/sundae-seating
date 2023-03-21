import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";
import { database } from "../../services/firebase"


interface Seat {
    id: number,
    isAvailable: boolean
}

interface initialState {
    seats: Seat[]
}

// 10 available seats
const initialState: initialState = {
    seats: [
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: false },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
        { id: 10, isAvailable: true },
    ],
}

// - The data flow from the Firebase database must be set up using async thunks.
// export const fetchSeats = createAsyncThunk('seats/fetchSeats', async () => {
//     const seatCountRef = ref(database, 'seats')
//     const snapshot = await get(seatCountRef)
//     console.log(snapshot)

//     return snapshot.val
// })


export const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        seatUpdated(state, action) {
            const id = action.payload
            const existingSeat = state.seats.find(seat => seat.id === id)
            if(existingSeat) {
                if(existingSeat.isAvailable) {
                    existingSeat.isAvailable = false
                    console.log("changed to false")
                } else {
                    existingSeat.isAvailable = true
                    console.log("changed to true")
                }
            }
        }

    },
    // extraReducers(builder) {
        // builder
        // .addCase(fetchSeats.pending, (state, action) => {
        //     state.status = 'loading'
        // })
        // .addCase(fetchSeats.fulfilled, (state, action) => {
        //     state.status = 'succeeded'
        //     console.log("succeeded")
        //     // do something
        // })
        // .addCase(fetchSeats.rejected, (state, action) => {
        //     state.status = 'failed'
        //     state.error = action.error.message || 'error while fetching'
        // })
    // }
})

export const { seatUpdated } = seatsSlice.actions

export default seatsSlice.reducer

export const selectAllSeats = (state: { seats: initialState }) => state.seats