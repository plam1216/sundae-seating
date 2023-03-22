import React from 'react'
import { CheckCircle, CheckCircleFill } from 'react-bootstrap-icons'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchSeats, seatUpdated } from '../Seats/seatsSlice'


interface SeatProps {
    id: number,
    isAvailable: boolean
}

const Seat = (props: SeatProps) => {
    const dispatch = useAppDispatch()

    // console.log("isAvailable?", props.isAvailable)

    return (
        <>
            {
                // don't let user click if Filled circle!
                props.isAvailable ?
                    <div
                        className="seat"
                        style={{ margin: '5px' }}
                        onClick={() => {
                            // change isAvailable to false & get updated seats
                            console.log("clicking")
                            dispatch(seatUpdated(props.id))
                            // dispatch(fetchSeats)
                        }}
                    >
                        <CheckCircle />
                    </div>
                    :
                    <div
                        className="seat"
                        style={{ margin: '5px' }}
                        onClick={() => {
                            // change isAvailable to true & get updated seats
                            console.log("clicking")
                            dispatch(seatUpdated(props.id))
                            // dispatch(fetchSeats)
                        }}
                    >
                        <CheckCircleFill />
                    </div>
            }
        </>
    )
}

export default Seat