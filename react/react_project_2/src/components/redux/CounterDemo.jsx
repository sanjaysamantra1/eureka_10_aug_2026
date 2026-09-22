import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../features/counter/counterSlice'

export default function CounterDemo() {
    const count = useSelector((storeObj) => {
        return storeObj.counter
    })
    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch(increment())
    }
    const decrementCount = () => {
        dispatch(decrement())
    }
    return <>
        <div>CounterDemo</div>

        <button onClick={decrementCount}>decrement</button>
        <div>count: {count}</div>
        <button onClick={incrementCount}>increment</button>
    </>
}
