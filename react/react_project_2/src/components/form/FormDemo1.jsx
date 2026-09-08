import { useState } from "react"

export default function FormDemo1() { // Controlled Form
    const initialData = {
        firstName: 'Virat',
        lastName: '',
        email: '',
        gender: ''
    }
    const initialError = {
        firstName: '',
        lastName: '',
        email: '',
        gender: ''
    }
    const [user, setUser] = useState(initialData)
    const [errors, setErrors] = useState(initialError)

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
        setErrors({
            ...errors,
            [name]: value.trim() === "" ? `${name} is required` : "",
        });
    }
    return <>
        <h3 className="text-center">Form Demo 1</h3>

        <div className="col-sm-4 offset-4 border border-3 rounded-3 p-3">
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <p className="my-1">
                    <label htmlFor="firstName">FirstName:</label>
                    <input id="firstName" name="firstName" value={user.firstName} onChange={handleChange} />
                    {errors.firstName ? <span className="text-danger">FirstName is Required</span> : null}
                </p>
                <p className="my-1">
                    lastName:
                    <input name="lastName" value={user.lastName} onChange={handleChange} />
                </p>
                <p className="my-1">
                    email:
                    <input name="email" value={user.email} onChange={handleChange} />
                </p>
                <p className="my-1">
                    Gender: &nbsp;
                    <input id="male" name="gender" type="radio" value="male" checked={user.gender == 'male'} onChange={handleChange} />
                    <label htmlFor="male">Male</label>
                    &nbsp;
                    <input id="female" name="gender" type="radio" value="female" checked={user.gender == 'female'} onChange={handleChange} />
                    <label htmlFor="female">Female</label>
                </p>

                <button type="reset">Reset</button>
                <button type="submit" className="mx-2">Submit</button>
            </form>

            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    </>
}
