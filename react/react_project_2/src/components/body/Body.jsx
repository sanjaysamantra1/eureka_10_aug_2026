import { lazy, useState } from "react";
// import ProductList from "../list/ProductList";
const ProductList = lazy(()=>import('../list/ProductList'))
import UserList from "../list/UserList";
import { Routes, Route } from 'react-router'
import Home from "../routing/Home";
import Aboutus from "../routing/Aboutus";
import Careers from "../routing/Careers";
import Contactus from "../routing/Contactus";
import NotFound from "../routing/NotFound";
import UserDetails from "../routing/UserDetails";
import ProductDetails from "../routing/ProductDetails";
import PermanentJobs from "../routing/PermanentJobs";
import ContractJobs from "../routing/ContractJobs";


export default function Body() {
  const [flag, setFlag] = useState(true);

  return <div style={{ minHeight: '300px', padding: '10px' }}>
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
    </Greet> */}
    {/* <EventDemo1/> */}
    {/* <EventDemo2/> */}
    {/* <Login/> */}
    {/* <PureDemo1/> */}
    {/* <PureDemo2/> */}
    {/* <ParentDemo/> */}
    {/* <UseMemoDemo1/> */}
    {/* <UseEffectDemo1/> */}
    {/* <UseEffectDemo2/> */}
    {/* <button onClick={()=>setFlag(!flag)}>toggle Flag</button>
      { flag ? <DigitalClock/> : null} */}
    {/* <FormDemo1/> */}
    {/* <AdditionDemo1/><hr/> */}
    {/* <AdditionDemo2 /> */}
    {/* <FormDemo2/> */}
    {/* <HttpDemo1 /> */}
    {/* <UserListHttp/> */}
    {/* <ProductListHttp/> */}
    {/* <TodoListHttp/> */}
    {/* <ParallelHttpCall/> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/aboutus" element={<Aboutus />} />
      <Route exact path="/careers" element={<Careers />} >
        <Route index element={<PermanentJobs />} />
        <Route path="/careers/permanent" element={<PermanentJobs />} />
        <Route path="/careers/contract" element={<ContractJobs />} />
      </Route>
      <Route exact path="/contactus" element={<Contactus />} />
      <Route exact path="/users" element={<UserList />} />
      <Route path="/userdetails/:id" element={<UserDetails />} />
      <Route exact path="/products" element={<ProductList />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
}
