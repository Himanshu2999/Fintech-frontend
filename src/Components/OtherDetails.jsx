import { useRef, useState } from "react";

import "../App.css"

function OtherDetails({ usertype, name, email, pass, mobile, cpass, setflag }) {
  const [file, setfile] = useState(null);
  const [special, setspecial] = useState("")
  const [exp, setexp] = useState("");
  const setflagback = () => {
    setflag(false)
  }

  const fileInputRef = useRef(null);
  const creaccount = async () => {
    const form = new FormData();
    form.append("name", name)
    form.append("email", email)
    form.append("pass", pass)
    form.append("mobile", mobile)
    form.append("file", file)
    form.append("usertype", usertype)
  
      const resp = await fetch("http://localhost:9000/api/creataccount", {
        method: "post",
        body: form,
      })
      if (resp.ok) {
        let res = await resp.json();
        if (res.statuscode == 1) {
          alert("Account created successfully")
        }
      }
  }


 const createadvisor = async () => {
    const form = new FormData();
    form.append("name", name)
    form.append("email", email)
    form.append("pass", pass)
    form.append("mobile", mobile)
    form.append("file", file)
    form.append("special", special)
    form.append("exp", exp)
      const resp = await fetch("http://localhost:9000/api/addadvisor", {
        method: "post",
        body: form,
      })
      if (resp.ok) {
        let res = await resp.json();
        if (res.statuscode == 1) {
          alert("Account created successfully")
        }
      }
  }

  const specialisations = [
    "Investment Planning",
    "Tax Planning",
    "Retirement Planning",
    "Wealth Management",
    "Insurance Planning",
    "Personal Finance",
  ];

  const handlePhotoChange = (event) => {
    setfile(event.target.files[0])
  }

return (
  <>
    <div className="page-shell">
      <div className="meeting-card">
        <div className="page-header">
          <h1>Other Details</h1>
          <p>Tell us a little more about your professional profile</p>
        </div>

        {
          usertype == "advisor" ?
            <>

              <div className="section-block">
                <h2>Years of Experience</h2>

                <select
                  className="slot"
                  value={exp}
                  onChange={(e) => setexp(e.target.value)}
                  style={{
                    width: "100%",
                    height: "46px",
                    padding: "0 14px",
                    textAlign: "left",
                    appearance: "auto",
                  }}
                >
                  <option value="">Enter your years of experience</option>
                  <option value="0-1">0 - 1 Years</option>
                  <option value="2-3">2 - 3 Years</option>
                  <option value="4-5">4 - 5 Years</option>
                  <option value="6-10">6 - 10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
              </div>

              <div className="section-block">
                <h2>Specialisation</h2>

                <select
                  className="slot"
                  value={special}
                  onChange={(e) => setspecial(e.target.value)}
                  style={{
                    width: "100%",
                    height: "46px",
                    padding: "0 14px",
                    textAlign: "left",
                    appearance: "auto",
                  }}
                >
                  <option value="">Select your specialisation</option>

                  {specialisations.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </>
            :
            null

        }
        <div className="section-block">
          <h2>Profile Photo</h2>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handlePhotoChange}
            hidden
          />

          <button
            type="button"
            className="calendar-card"
            onClick={() => fileInputRef.current?.click()}
            style={{
              width: "100%",
              minHeight: "170px",
              border: "1px dashed #cfd7e5",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "#16213a",
            }}
          >
            {file ? (
              <>
                <img
                  src={file}
                  alt="Profile preview"
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #e4e9f1",
                  }}
                />

                <strong style={{ fontSize: "12px" }}>
                  Change profile photo
                </strong>

                <span style={{ fontSize: "10px", color: "#71809a" }}>
                  JPG, PNG or WEBP up to 5MB
                </span>
              </>
            ) : (
              <>
                <div
                  className="video-icon"
                  style={{
                    width: "58px",
                    height: "58px",
                    fontSize: "25px",
                  }}
                >
                  ◩
                </div>

                <strong style={{ fontSize: "13px" }}>
                  Upload your profile photo
                </strong>

                <span style={{ fontSize: "11px", color: "#71809a" }}>
                  JPG, PNG or WEBP up to 5MB
                </span>
              </>
            )}
          </button>
        </div>
        <div>


          <label className="checkbox-row">
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </label>

          <button onClick={usertype=="advisor"? createadvisor: creaccount} type="button" className="btn btn-primary btn-block auth-submit">
            Sign Up
          </button> </div>
        <br /> <br />
        <button onClick={setflagback}> back </button>
      </div>

    </div>

  </>

);
}

export default OtherDetails;
