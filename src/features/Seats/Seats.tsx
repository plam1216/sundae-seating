import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import Seat from '../Seat/Seat'
import { selectAllSeats } from './seatsSlice'
import { fetchSeats } from './seatsSlice'

import './Seats.css'

const Seats = () => {
    const dispatch = useAppDispatch()

    // seats value = initialState
    const seats = useAppSelector(selectAllSeats)
    const status = useAppSelector(state => state.seats.status)

    console.log("seats", seats)
    console.log("status: ", status)


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchSeats())
        }
    }, [status, dispatch])

    // show all available seats
    const displaySeats = seats.seats.map((seat, index) => (
        <>
            <div
                className="seat-container"
                key={index}
            >
                {seat.id}
                <Seat
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