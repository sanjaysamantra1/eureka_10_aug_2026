import DataBinding from "../databinding/DataBinding";
import ListDemo1 from "../list/ListDemo1";
import CounterDemo1 from "../state/CounterDemo1";
import CounterDemo2 from "../state/CounterDemo2";
import CounterDemo3 from "../state/CounterDemo3";
import EvenOdd from "../state/EvenOdd";
import StateAssignment1 from "../state/StateAssignment1";
import StateAssignment2 from "../state/StateAssignment2";

export default function Body() {
  return <div style={{minHeight:'300px'}}>
      {/* <div>This is Body Component</div> */}
      {/* <DataBinding/> */}
      {/* <CounterDemo1/> */}
      {/* <CounterDemo2/> */}
      {/* <CounterDemo3 /> */}
      {/* <EvenOdd/> */}
      {/* <StateAssignment1/> */}
      {/* <StateAssignment2/> */}
      <ListDemo1/>
  </div>
}
