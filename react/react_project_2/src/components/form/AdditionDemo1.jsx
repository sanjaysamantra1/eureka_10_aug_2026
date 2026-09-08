import React, { useState } from 'react'

export default function AdditionDemo1() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);

  return <div>
    <h3>Addition of 2 numbers using state variables</h3>

    <form>
      <p>
        Number-1:
        <input type="number" value={num1} onChange={(e) => setNum1(+e.target.value)} />
      </p>
      <p>
        Number-2:
        <input type="number" value={num2} onChange={(e) => setNum2(+e.target.value)} />
      </p>

      <p>Addition of {num1} & {num2} is {num1 + num2}</p>
    </form>
  </div>
}
