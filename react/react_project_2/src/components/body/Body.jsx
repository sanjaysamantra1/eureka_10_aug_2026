import DataBinding from "../databinding/DataBinding";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import Login from "../form/Login";
import ParentDemo from "../hooks/ParentDemo";
import UseMemoDemo1 from "../hooks/UseMemoDemo1";
import EmployeeList from "../list/EmployeeList";
import ListDemo1 from "../list/ListDemo1";
import ProductList from "../list/ProductList";
import UserList from "../list/UserList";
import Greet from "../props/Greet";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import EvenOdd from "../state/EvenOdd";
import PureDemo1 from "../state/PureDemo1";
import PureDemo2 from "../state/PureDemo2";
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
      {/* <EmployeeList/> */}
      {/* <UserList/> */}
      {/* <ProductList/> */}
      {/* <Greet name="Nehanth" age="45" >
        <div>Good Morning</div>
        <div>another div</div>
      </Greet> */}
      {/* <EventDemo1/> */}
      {/* <EventDemo2/> */}
      {/* <Login/> */}
      {/* <PureDemo1/> */}
      {/* <PureDemo2/> */}
      <ParentDemo/>
      {/* <UseMemoDemo1/> */}
  </div>
}
