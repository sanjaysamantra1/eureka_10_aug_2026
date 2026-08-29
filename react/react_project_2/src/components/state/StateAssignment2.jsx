import React, { useState } from 'react'

export default function StateAssignment2() {
  const [selectedState , setSelectedState] = useState('Odisha');

  const updateState = (event)=>{
    console.log(event.target.value);
    setSelectedState(event.target.value);
  }
  return <>
    <div>2. Create a dropdown with state names; when the user changes the dropdown value, print the selected value in a div.</div>

    <select onChange={updateState}>
        <option>Odisha</option>
        <option>Bihar</option>
        <option>Karnataka</option>
        <option>TamilNadu</option>
        <option>Andhra Pradesh</option>
        <option>kerala</option>
    </select>

    <div>Selected State: {selectedState}</div>
  </>
}
