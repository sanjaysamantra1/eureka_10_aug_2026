import DataBinding from "../databinding/DataBinding";
import EmployeeList from "../list/EmployeeList";
import ListDemo1 from "../list/ListDemo1";
import ProductList from "../list/ProductList";
import UserList from "../list/UserList";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import EvenOdd from "../state/EvenOdd";
import StateAssignment1 from "../state/StateAssignment1";
import StateAssignment2 from "../state/StateAssignment2";

export default function Body() {
  return <div style={{minHeight:'300px', padding:'10px'}}>
      {/* <div>This is Body Component</div> */}
      {/* <DataBinding/> */}
      {/* <CounterDemo1/> */}
      {/* <CounterDemo2/> */}
      {/* <CounterDemo3 /> */}
      {/* <EvenOdd/> */}
      {/* <StateAssignment1/> */}
      {/* <StateAssignment2/> */}
      {/* <ListDemo1/> */}
      <EmployeeList/>
      {/* <UserList/> */}
      {/* <ProductList/> */}
  </div>
}
