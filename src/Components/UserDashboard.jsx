import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Maindashbody from "./Maindashbody";
import DashRouetes from "./DashRoutes";
import { useState } from "react";
import Meeting from "./Meeting";
import ConsultList from "./ConsultList";
import JoinRoom from "./JoinRoom";

function UserDashboard() {
  const {name, image} = useSelector((state)=>state)
  const nav = useNavigate();

  const [body, setbody] = useState('main')
  return (
    <div className="dashboard-wrapper">
      {/* ---------- SIDEBAR ---------- */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">F</span>
          Fintech
        </div>

        <nav>
          <a href="#" className="sidebar-link active">🏠 Dashboard</a>
          <a href="#" className="sidebar-link">👤 My Profile</a>
          <a href="#" className="sidebar-link">📋 Financial Profile</a>
          <a href="https://fintech-ai-model.netlify.app/" target="_blank" className="sidebar-link">📈 AI Financial Analysis</a>
          <a href="#" className="sidebar-link">✨ AI Recommendations</a>
          <a href="#" className="sidebar-link">🔍 Find Advisor</a>
          <a href="#" onClick={()=>setbody("meeting")} className="sidebar-link">📅 Book Consultation</a>
          <a href="#" onClick={()=>setbody("consultreq")}>🕓 Consultation Requests</a>
          <a href="#" onClick={()=>setbody("join")} className="sidebar-link"> Join room </a>
          <a href="#" className="sidebar-link">⚙️ Settings</a>
        </nav>

        <div className="upgrade-box">
          <strong style={{ fontSize: "13px" }}>Upgrade to Premium</strong>
          <p>Get advanced insights and priority support.</p>
          <button className="btn btn-primary btn-block">Upgrade Now</button>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="main-content">
        <div className="topbar">
          <span>🔔</span>
          <div className="user-info">
            <div className="avatar"> <img src={`uploads/profiles/${image}`} width={"40px"} /></div>
            <div>
              <strong style={{ fontSize: "13px", display: "block" }}>
                {name}
              </strong>
            </div>
          </div>
        </div>

        <div className="page-body">
          {/* welcome message */}
          <div className="welcome-row">
            <div>
              <h1>Welcome back, {name} 👋</h1>
              <p>Take control of your finances and grow your wealth.</p>
            </div>
            <button className="btn btn-primary">⚡ Quick Actions</button>
          </div>

          {/* journey card + upcoming consultation */}

{
  body=="main"?
  <Maindashbody setbody={setbody}/>
  :
  body=="meeting"?
  <Meeting/>
  :
   body=="consultreq"?
   <ConsultList/>
   : body=="join"?
   <JoinRoom/>
   :
  null
}
          

          {/* tip of the day */}
          <div className="tip-box">
            <div>
              <strong style={{ fontSize: "14px" }}>💡 Tip of the Day</strong>
              <p style={{ fontSize: "13px", color: "#666" }}>
                Start an emergency fund of 6 months' expenses for financial
                security.
              </p>
            </div>
            <a href="#" style={{ fontSize: "13px", color: "#2f6df6", fontWeight: "bold" }}>
              Know More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
