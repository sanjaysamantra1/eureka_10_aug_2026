import React, { useState } from 'react'

export default function EmployeeList() {
  const employeeArr = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];
  const [employees , setEmployees] = useState(employeeArr);
  
  const filterEmployees = (event)=>{
    let selected_gender = event.target.value;
    let filtered_employees = employeeArr.filter(emp=>{
        if(selected_gender == 'All') return emp;
        return emp.gender == selected_gender;
    })
    setEmployees(filtered_employees);
  }
  return <>
    <h3 className='text-center'>Employee List</h3>
    <select onChange={filterEmployees}>
        <option>All</option>
        <option>male</option>
        <option>female</option>
    </select>
    <table className="table table-bordered">
        <tbody>
            {employees.map((emp)=>{
                return <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.role}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.status}</td>
                    <td>{emp.gender}</td>
                </tr>
            })}
        </tbody>
    </table>
  </>
}
