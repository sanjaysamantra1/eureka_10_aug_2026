import { useEffect } from 'react'

export default function HttpDemo1() {
    console.log('HttpDemo1 component is mounted');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    }, []); // once component is mounted, this will be called

    return (
        <div>HttpDemo1</div>
    )
}
