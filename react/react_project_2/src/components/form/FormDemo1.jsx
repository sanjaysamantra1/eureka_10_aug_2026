import { useState } from "react"

export default function FormDemo1() {
    const initialData = {
        firstName: '',
        lastName: '',
        email: ''
    }
    const [user, setUser] = useState(initialData)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted')
        console.log(user)
    }
    const handleReset = (event) => {
        setUser({ ...initialData })
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }
    return <>
        <h3 className="text-center">Form Demo 1</h3>

        <div className="col-sm-4 offset-4 border border-3 rounded-3 p-3">
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <p className="my-1">
                    FirstName:
                    <input name="firstName" value={user.firstName} onChange={handleChange} />
                </p>
                <p className="my-1">
                    lastName:
                    <input name="lastName" value={user.lastName} onChange={handleChange} />
                </p>
                <p className="my-1">
                    email:
                    <input name="email" value={user.email} onChange={handleChange} />
                </p>

                <button type="reset">Reset</button>
                <button type="submit" className="mx-2">Submit</button>
            </form>

            <pre>
                {JSON.stringify(user,null,2)}
            </pre>
        </div>
    </>
}
