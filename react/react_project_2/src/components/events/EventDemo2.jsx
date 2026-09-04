import React from 'react'

export default function EventDemo2() {
    function clickHandler(event) {
        console.log(event)
    }
    function keyUpHandler(event) {
        console.log(event)
    }

    return <>
        <div>EventDemo2</div>

        <input type="text" onChange={keyUpHandler} />
        <button onClick={clickHandler}>Click Me</button>
    </>
}
