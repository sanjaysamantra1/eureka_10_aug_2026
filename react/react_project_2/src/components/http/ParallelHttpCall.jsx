import axios from 'axios';
import React, { useState } from 'react'

export default function ParallelHttpCall() {
    const [githubData, setGithubData] = useState([]);

    const fetchData = async () => {
        const promise1 = axios.get("https://api.github.com/users/defunkt");
        const promise2 = axios.get("https://api.github.com/users/evanphx");
        const promise3 = axios.get("https://api.github.com/users/sanjaysamantra1");
        try {
            const responseArr = await axios.all([promise1, promise2, promise3]);
            let responseData = responseArr.map((response) => response.data);
            console.log(responseData)
            setGithubData(responseData);
        } catch (err) {
            console.log('1 of the api failed....')
        }
    }

    return <>
        <h3 className="text-center">Axios All to make multiple API calls</h3>
        <button onClick={fetchData}>fetchData</button>

        <table className="table table bordered">
            <tbody>
                {githubData.map(data => {
                    return <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.login}</td>
                        <td>{data.type}</td>
                        <td>{data.user_view_type}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.followers}</td>
                        <td>{data.bio}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
