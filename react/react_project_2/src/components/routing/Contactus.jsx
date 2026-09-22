import React, { useContext } from 'react'
import { UserContext } from '../../utils/userContext'
import { ThemeContext } from '../../utils/themeContext';

export default function Contactus() {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    return <>
        <h3 className="text-center">This is Contactus Component</h3>
        <h4>Current User: {userContext}</h4>
        <h4>Current Theme: {themeContext.theme}</h4>
        <button onClick={themeContext.toggleTheme}>toggle Theme</button>
    </>
}
