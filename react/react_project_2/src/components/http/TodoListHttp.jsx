import React, { useState } from 'react'
import client from '../../utils/client';

export default function TodoListHttp() {
    const [todoArr, setToDoArr] = useState([]);

    const fetchTodoData = async () => {
        const response = await client.get('/todos')
        setToDoArr(response.data);
        console.log(response.data)
    }
    return <>
        <h3 className="text-center">ToDo List Using Http</h3>
        <button onClick={fetchTodoData}>Fetch todos</button>

        <table className="table table-bordered mt-2">
            <tbody>
                {todoArr.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
