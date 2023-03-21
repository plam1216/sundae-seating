import React from 'react'
import { CheckCircle, CheckCircleFill } from 'react-bootstrap-icons'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { seatUpdated } from '../Seats/seatsSlice'


interface SeatProps {
    id: number,
    isAvailable: boolean
}

const Seat = (props: SeatProps) => {
    const dispatch = useAppDispatch()

    // console.log(props.isAvailable)

    return (
        <>
            {
                // don't let user click if Filled circle!
                props.isAvailable ?
                    <div
                        className="seat"
                        style={{ margin: '5px' }}
                        onClick={() => {
                            // change isAvailable to false
                            console.log("clicking")
                            dispatch(seatUpdated(props.id))
                        }}
                    >
                        <CheckCircle />
                    </div>
                    :
                    <div
                        className="seat"
                        style={{ margin: '5px' }}
                        onClick={() => {
                            // change isAvailable to true
                            console.log("clicking")
                            dispatch(seatUpdated(props.id))
                        }}
                    >
                        <CheckCircleFill />
                    </div>
            }
        </>
    )
}

export default Seat