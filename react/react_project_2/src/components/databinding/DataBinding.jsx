import React from 'react'

export default function DataBinding() {
  let a = 10;
  let b = 20;
  console.log(React)

  return <>
    <div>DataBinding Component</div>
    <div>Addition of {a} and {b} is {a+b}</div>
    <div>React Version- {React.version}</div>
  </>
}
