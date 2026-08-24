import { useState } from "react";
import { useSelector } from "react-redux";
import SignSection from "./SignSection";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [uname, setname] = useState('');
    const [pass, setpass] = useState('');
    const { idk, name } = useSelector((state) => state)
    const nav = useNavigate('')
    const login = async () => {
        const data = { uname, pass }
        const resp = await fetch("https://fintech-backend-6.onrender.com/api/login", {
            method: "post",
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        })
        if (resp.ok) {
            let res = await resp.json();t 
            if (res.statuscode == 1) {
                alert("login successfully")
                sessionStorage.setItem("udata", JSON.stringify(res.user))
                nav("/userdash")
            }
            else if (res.statuscode == 2) {
                alert("login successfully")
                sessionStorage.setItem("udata", JSON.stringify(res.advi))
            }
        }
    }
    return (
        <>
        <Navbar/>
 <section className="auth-section">
        <div className="auth-wrapper">
            <SignSection/>
            <div className="auth-right">
                {idk}
                <h2> Login </h2>
                <p className="auth-subtitle">Login to get started</p>

                <div className="auth-form">
                    <label>Name</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Enter your full name" />

                    <label>Password</label>
                    <input type="password" onChange={(e) => setpass(e.target.value)} placeholder="Enter your password" />

                    <button type="button" onClick={login} className="btn btn-primary btn-block auth-submit">
                        Login
                    </button>
                </div>
            </div>
            </div>
            </section>
            
        </>
    );
};

export default Login;