import React from "react";

export default function ListDemo1() {
  const countryArr = ["India", "USA", "Canada", "Japan", "Srilanka","Indonesia"];

  return <>
    <h3>Country List:</h3>
    <ul>
        {countryArr.map((country,ind)=>{
            return <li key={ind}>{country}</li>
        })}
    </ul>
    <hr/>

    <h3>Country Dropdown:</h3>
    <select>
        {countryArr.map((country,ind)=>{
            return <option key={ind}>{country}</option>
        })}
    </select>
  </>
}
