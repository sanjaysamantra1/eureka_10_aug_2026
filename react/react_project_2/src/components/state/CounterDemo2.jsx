import { useState } from "react";

export default function CounterDemo2() {
  const [count, setCount] = useState(0); // count - State variable

  const decrement = () => {
    setCount(count-1);
  };
  const increment = () => {
    setCount(count+1);
  };
  return (
    <>
      <div>Counter Example with state variable</div>

      <button onClick={decrement}>-</button>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
    </>
  );
}
/* 
    1. useState() is an inbuilt function to declare state variables
    2. it takes 1 arguement - Default value
    3. it returns an array with 2 items: [stateVariable , Function to update the state variable]
*/
