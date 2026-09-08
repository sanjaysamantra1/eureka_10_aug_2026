import React, { useRef } from 'react'

export default function AdditionDemo2() { // uncontrolled form
  const inputRef1 = useRef()
  const inputRef2 = useRef()

  const addition = () => {
    const val1 = +(inputRef1.current?.value || 0);
    const val2 = +(inputRef2.current?.value || 0);
    console.log(`Addition of ${val1} and ${val2} is ${val1 + val2}`);

    console.log(inputRef1)
  };

  return <div>
    num1: <input ref={inputRef1} defaultValue={10} />
    num2: <input ref={inputRef2} defaultValue={20} />
    <button onClick={addition}>Add</button>
  </div>
}
