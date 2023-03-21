import React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

import Seat from '../Seat/Seat'


const Queue = () => {
    const count = useAppSelector((state) => state.queue.count)

    // show all available seats
    const displaySeats = () => {
        const seats = [];

        for (let i = 0; i < count; i++) {
            seats.push(
                <Seat key={i} />
            );
        }
        return seats;
    }

    return (
        <div>
            Queue
            {displaySeats()}
        </div>
    )
}

export default Queue