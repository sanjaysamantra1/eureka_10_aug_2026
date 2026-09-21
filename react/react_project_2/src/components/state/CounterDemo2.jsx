import { useEffect, useState } from "react";
import WithLogger from "../hoc/WithLogger";

function CounterDemo2() {
  const [count, setCount] = useState(0); // count - State variable

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount((prevState) => prevState + 1); // asynchronous
  };

  return (
    <>
      <div>Counter Example with state variable</div>

      <button onClick={decrement}>decrement</button>
      <span className="mx-2">Count: {count}</span>
      <button onClick={increment}>increment</button>
    </>
  );
}
export default WithLogger(CounterDemo2);
/* 
    1. useState() is an inbuilt function to declare state variables
    2. it takes 1 arguement - Default value
    3. it returns an array with 2 items: [stateVariable , Function to update the state variable]
*/
