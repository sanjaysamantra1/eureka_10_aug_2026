import React from "react";

function ChildDemo({message}) {
    console.log('Child rendering...')
    return <>
        <h3>This is Child Component</h3>
        <h4>Message:{message}</h4>
    </>
}
export default React.memo(ChildDemo);