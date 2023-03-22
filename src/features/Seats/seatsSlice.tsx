import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get, set, update } from "firebase/database";
import { database } from "../../services/firebase"
import { Seat, Seats } from "../../types";


// 10 available seats
const initialState: Seats = {
    data: [
        { id: 0, isAvailable: true },
        { id: 1, isAvailable: true },
        { id: 2, isAvailable: true },
        { id: 3, isAvailable: true },
        { id: 4, isAvailable: true },
        { id: 5, isAvailable: true },
        { id: 6, isAvailable: true },
        { id: 7, isAvailable: true },
        { id: 8, isAvailable: true },
        { id: 9, isAvailable: true },
    ],
    status: 'idle'
}

const seatCountRef = ref(database, "seats")
set(seatCountRef, initialState)


// fetch data from Firebase
export const fetchSeats = createAsyncThunk('seats/fetchSeats', async () => {
    const seatCountRef = ref(database, 'seats')
    const snapshot = await get(seatCountRef)
    const data = snapshot.val()
    console.log("fetchSeats data", data)

    return data
})


export const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        seatUpdated(state, action) {
            const id = action.payload
            const existingSeat = state.data.find(seat => seat.id === id)
            if(existingSeat) {
                console.log("existingSeat.isAvailable: ", existingSeat.isAvailable)
                if(existingSeat.isAvailable) {
                    // existingSeat.isAvailable = false
                    console.log("changed to false")
                    
                    const seatCountRef = ref(database, "seats/data/"+`${existingSeat.id}`)
                    update(seatCountRef, {isAvailable: false})
                    // fetchSeats()
                } else {
                    // existingSeat.isAvailable = true
                    console.log("changed to true")

                    const seatCountRef = ref(database, "seats/data"+`${existingSeat.id}`)
                    update(seatCountRef, {isAvailable: true})
                    // fetchSeats()
                    
                }
            }
        }

    },
    extraReducers(builder) {
        builder
        .addCase(fetchSeats.pending, (state, action) => {
            state.status = 'loading'
            console.log("extraReducers: loading")
        })
        .addCase(fetchSeats.fulfilled, (state, action) => {
            state.status = 'succeeded'
            console.log("extraReducers: succeeded")
        })
        .addCase(fetchSeats.rejected, (state, action) => {
            state.status = 'failed'
            console.log("extraReducers: failed")
        })
    }
})

export const { seatUpdated } = seatsSlice.actions

export default seatsSlice.reducer

// export const selectAllSeats = (state: { seats: Seats }) => state.seats