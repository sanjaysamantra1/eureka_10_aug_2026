import { useState } from 'react'

export default function UserListHttp() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data);
    }
    return <>
        <h3 className="text-center">User List Using Http</h3>
        <button onClick={fetchUsers}>Fetch Users</button>
        
        <table className="table table-bordered">
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.address?.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
