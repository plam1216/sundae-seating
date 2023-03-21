import { configureStore } from '@reduxjs/toolkit'
import seatsReducer from '../features/Seats/seatsSlice'

export const store = configureStore({
  reducer: {
    seats: seatsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch