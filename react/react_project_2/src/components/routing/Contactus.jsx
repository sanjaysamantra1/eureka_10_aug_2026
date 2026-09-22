import React, { useContext } from 'react'
import { UserContext } from '../../utils/userContext'

export default function Contactus() {
    const userContext = useContext(UserContext);
    console.log(userContext)

    return <>
        <h3 className="text-center">This is Contactus Component</h3>
        <h4>Current User: {userContext}</h4>
    </>
}
