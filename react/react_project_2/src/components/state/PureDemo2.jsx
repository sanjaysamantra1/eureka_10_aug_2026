import React, { useState } from 'react'

export default function PureDemo2() {
    const [name, setName] = useState('Sai');
    const [user, setUser] = useState({ name: 'Sanjay', 'address': 'Bangalore' });

    const updateName = () => {
        setName('Sai')
    }
    const updateUser = () => {
        setUser({ name: 'Sanjay', 'address': 'Bangalore' })
    }
    return <>
        {console.log('PureDemo2 Rendered...')}
        <div>This is PureDemo2 Component</div>
        <div>Name: {name}</div>
        <button onClick={updateName}>Update Name</button>
        <hr />
        <div>User:{user.name} {user.address}</div>
        <button onClick={updateUser}>Update User</button>
    </>
}
