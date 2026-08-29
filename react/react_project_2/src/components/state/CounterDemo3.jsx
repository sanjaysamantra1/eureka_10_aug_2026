import { useState } from "react";
export default function CounterDemo3() {
  const [count, setCount] = useState(0); // count - State variable

  const incrementBy5 = () => {
    /* setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1) */
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  return <>
      <div>Count: {count}</div>
      <button onClick={incrementBy5}>incrementBy5</button>
    </>
  
}
