import React from "react";

export default function CounterDemo1() {
  let count = 1; // count - is it state variable - No
  // Count - Local Variable, UI is not re-renedered

  const decrement = () => {
    count = count - 1;
    console.log("After Decrement ", count);
  };
  const increment = () => {
    count = count + 1;
    console.log("After Increment ", count);
  };
  return (
    <>
      <div>Counter Example without state variable</div>

      <button onClick={decrement}>-</button>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
    </>
  );
}
