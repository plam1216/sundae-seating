import React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import Seat from '../Seat/Seat'
import { selectAllSeats } from './seatsSlice'

import './Seats.css'

const Seats = () => {
    const dispatch = useAppDispatch()

    // seats value = initialState
    const seats = useAppSelector(selectAllSeats)
    console.log("seats", seats)


    // show all available seats
    const displaySeats = seats.seats.map((seat, index) => (
        <>
            <div className="seat-container">
                {seat.id}
                <Seat
                    key={index}
                    id={seat.id}
                    isAvailable={seat.isAvailable}
                />
            </div>
        </>
    ))

    return (
        <div>
            <h1>Seat Queue</h1>
            <div className="seats">
                {displaySeats}
            </div>
        </div>
    )
}

export default Seats