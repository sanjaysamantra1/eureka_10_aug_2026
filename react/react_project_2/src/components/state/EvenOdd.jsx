import React, { useState } from "react";

export default function EvenOdd() {
  const [num, setNum] = useState(2);
  const increment = () => setNum(num + 1);
  return <>
    <div>Num: {num}</div>
    { 
        num%2 ==0 ?
        <div>{num} is Even Number</div> : <div>{num} is Odd Number</div>
    }
    <button onClick={increment}>Increment</button>
  </>;
}
