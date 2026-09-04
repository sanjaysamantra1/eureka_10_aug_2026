import { useState } from 'react';
import ChildDemo from './ChildDemo'

export default function ParentDemo() {
    console.log('Parent rendering...')
    const [count, setCount] = useState(0);
    const [message,setMessage] = useState('Good Morning');

    return <>
        <h3>This is Parent Component</h3>
        <div>Count:{count}</div>
        <button onClick={()=>setCount(count+1)} className="mx-2">Increment</button>
        <button onClick={()=>setMessage('Good Evening')}>Update message</button>
        <hr/>
        
        <ChildDemo message={message} />
    </>
}
