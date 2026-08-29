import React, { useState } from 'react'

export default function StateAssignment1() {
  const [flag,setFlag] = useState(true);
  const toggleFlag = ()=> setFlag(!flag);

  return <>
    <div>1. Have a paragraph and a toggle button; on clicking the button, control the visibility (Show / Hide) of the paragraph.</div>

    {flag ? <h3>Helloooooo, Good Morning!!!</h3> : null}
    <button onClick={toggleFlag}>
        {flag?'HIDE':'SHOW'}
    </button>
  </>
}
