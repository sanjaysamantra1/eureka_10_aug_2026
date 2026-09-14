import { Link, useNavigate } from "react-router";

export default function Aboutus() {
    const navigate = useNavigate();

    const doSomethingAndGoToHome = () => {
        console.log('Execute Some Logic....');
        navigate('/home')
    }
    return <>
        <h3 className="text-center">This is Aboutus Component</h3>

        <p><a href="/home">Go To Home</a></p>

        <p><Link to="/home">Go To Home</Link></p>

        <p><button onClick={doSomethingAndGoToHome}>Go To Home</button></p>

        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}>Go Next</button>
    </>
}
