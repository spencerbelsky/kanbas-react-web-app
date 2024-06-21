import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signin() {
    const dispatch = useDispatch()
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState<any>({});
    const navigate = useNavigate();
    const signin = async () => {
        try {
            const currentUser = await client.signin(credentials);
            dispatch(setCurrentUser(currentUser));
            console.log("something")
        } catch (err: any) {
            setError(err.response.data.message);
            console.log("could not log in")
        }
        navigate("/Kanbas/Account/Profile");
    };

    return (
        <div>
            <h1>Sign in now</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <input onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                value={credentials.username} className="form-control mb-2" placeholder="username" />
            <input onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                value={credentials.password} className="form-control mb-2" placeholder="password" type="password" />
            <button onClick={signin} className="btn btn-primary w-100"> Sign in </button>
            <br />
            <Link to="/Kanbas/Account/Signup" className="btn btn-secondary mt-2">Sign up</Link>
        </div>
    );
}
