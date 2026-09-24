import React from 'react'
import CounterDemo2 from '../state/CounterDemo2'
import CounterDemo from '../redux/CounterDemo'
import TaskList from '../hooks/TaskList'

export default function Home() {
    return <>
        <h3 className="text-center">This is Home Component</h3>
        {/* <CounterDemo2/> */}
        {/* <CounterDemo/> */}
        <TaskList/>
    </>
}
