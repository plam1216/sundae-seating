import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import Seat from '../Seat/Seat'
// import { selectAllSeats } from './seatsSlice'
import { fetchSeats } from './seatsSlice'

import { Seat as SeatInterface } from '../../types'

import './Seats.css'

const Seats = () => {
    const dispatch = useAppDispatch()

    // const seats = useAppSelector(selectAllSeats)
    const [seats, setSeats] = useState<SeatInterface[]>([] as SeatInterface[])
    const seatsStatus = useAppSelector(state => state.seats.status)

    console.log("seats", seats)
    console.log("status: ", seatsStatus)


    useEffect(() => {
        const getData = async () => {
            const response = await dispatch(fetchSeats())
            console.log("fetch response", response)
            
            const data = response.payload.data
            console.log("data payload", data)

            setSeats(data)
        }

        if (seatsStatus === 'idle') {
            getData()
        }
    }, [seatsStatus, dispatch])

    // show all available seats
    const displaySeats = seats.map((seat, index) => (
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