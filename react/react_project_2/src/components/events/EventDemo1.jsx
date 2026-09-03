import React from 'react'

export default function EventDemo1() {
    const fun1 = (event) => {
        console.log('This is fun1...')
        console.log(event.type, event.target, event.currentTarget)
    }
    const deleteEmployee = (event, id) => {
        console.log(`Employee with id ${id} is being deleted...`)
    }
    return <>
        <h3 className='text-center'>Let's Learn React Events</h3>
        <button className="btn btn-primary" onClick={fun1}>
            <span>Click Me</span>
        </button>

        <button className="btn btn-danger" onClick={(e) => deleteEmployee(e, 2)}>Delete</button>

        <div onClick={() => console.log("Div clicked...")}>
            <p onClick={() => console.log("Paragraph clicked...")}>
                <button onClick={() => console.log("Button clicked...")}>
                    <span onClick={() => console.log("Span clicked...")}>Click Me</span>
                </button>
            </p>
        </div>

        <div onClickCapture={() => console.log("Div clicked...")}>
            <p onClickCapture={() => console.log("Paragraph clicked...")}>
                <button onClickCapture={() => console.log("Button clicked...")}>
                    <span onClickCapture={() => console.log("Span clicked...")}>Click Me</span>
                </button>
            </p>
        </div>
    </>
}
