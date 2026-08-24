import { useEffect, useState } from "react";
import OtherDetails from "./Components/OtherDetails";
import SignSection from "./Components/SignSection";
import Navbar from "./Components/Navbar";
function SignUp() {
  // which role the user picked - customer, advisor or admin
  const [role, setRole] = useState("customer");
  // show/hide password text
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [pass, setpass] = useState("")
  const [cpass, setcpass] = useState("")
  const [mobile , setmobile] = useState("")
  const[flag, setflag] = useState(false);


  return (
    <div>
      {/* ---------- NAVBAR ---------- */}
      <Navbar/>
      {/* ---------- SIGN UP SECTION ---------- */}
      <section className="auth-section">
        <div className="auth-wrapper">
          {/* left side - intro + feature list */}
          
            <SignSection/>
          {/* right side - the actual form */}
          <div className="auth-right">
            <h2>Sign Up</h2>
            <p className="auth-subtitle">Create your account to get started</p>

            <div className="auth-form">
    {
      flag==true?
      <>
        <OtherDetails setflag={setflag} usertype={role} name={name} email={email} mobile={mobile} pass={pass} />
      </>
   : 
   <>
              <label>Full Name</label>
              <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Enter your full name" />

              <label>Email Address</label>
              <input type="email" onChange={(e) => setmail(e.target.value)} placeholder="Enter your email address" />

              <label>Phone Number</label>
              <div className="phone-row">
                <select className="country-code">
                  <option>🇮🇳 +91</option>
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                </select>
                <input onChange={(e)=>setmobile(e.target.value)} type="tel" placeholder="Enter your phone number" />
              </div>

              <label>Password</label>
              <div className="password-row">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  onChange={(e) => setpass(e.target.value)}
                />
                <button
                  type="button"
                  className="show-hide-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p className="hint-text">
                Must be at least 8 characters with a mix of letters, numbers & symbols
              </p>

              <label>Confirm Password</label>
              <input onChange={(e) => setcpass(e.target.value)} type="password" placeholder="Confirm your password" />

              {/* role selector */}
              <label>I am signing up as</label>
              <div className="role-select">
                <div
                  className={`role-card ${role === "customer" ? "selected" : ""}`}
                  onClick={() => setRole("customer")}
                >
                  <span className="role-icon">👤</span>
                  <h4>Customer</h4>
                  <p>I want to manage my finances</p>
                </div>
                <div
                  className={`role-card ${role === "advisor" ? "selected" : ""}`}
                  onClick={() => setRole("advisor")}
                >
                  <span className="role-icon">📈</span>
                  <h4>Advisor</h4>
                  <p>I want to help others with financial planning</p>
                </div>
               
              </div>

             <button onClick={()=>setflag(true)} className="btn btn-primary btn-block auth-submit"> Next </button>

              <div className="divider">
                <span>or sign up with</span>
              </div>

              <div className="social-row">
                <button type="button" className="social-btn">
                  <span>G</span> Google
                </button>
                <button type="button" className="social-btn">
                  <span></span> Apple
                </button>
              </div>
                </>
    }

              <p className="login-link-text">
                Already have an account? <a href="#">Login</a>
              </p>
</div>        
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
