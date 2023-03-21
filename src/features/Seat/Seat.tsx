import React from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { decrement } from '../Queue/queueSlice'


// - The project must display a live queue of 10 seats that can be selected by anonymous users.

const handleClick = () => {
    console.log("clicking")
}

const Seat = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <span onClick={() => {
                dispatch(decrement())
            }}
            >Seat
            </span>
        </div>
    )
}

export default Seat