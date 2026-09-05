import React from "react";

function ChildDemo({message,sayHi}) {
    console.log('Child rendering...')
    return <>
        <h3>This is Child Component</h3>
        <h4>Message:{message}</h4>
        <button onClick={sayHi}>Say Hi</button>
    </>
}
export default React.memo(ChildDemo);