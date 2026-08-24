function Dashboard() {
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
          <a href="#" className="sidebar-link">📈 AI Financial Analysis</a>
          <a href="#" className="sidebar-link">✨ AI Recommendations</a>
          <a href="#" className="sidebar-link">🔍 Find Advisor</a>
          <a href="#" className="sidebar-link">📅 Book Consultation</a>
          <a href="#" className="sidebar-link">🕓 Consultation History</a>
          <a href="#" className="sidebar-link">📄 Reports</a>
          <a href="#" className="sidebar-link">🔔 Notifications</a>
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
            <div className="avatar"></div>
            <div>
              <strong style={{ fontSize: "13px", display: "block" }}>
                Rahul Sharma
              </strong>
              <span style={{ fontSize: "11px", color: "#999" }}>Customer</span>
            </div>
          </div>
        </div>

        <div className="page-body">
          {/* welcome message */}
          <div className="welcome-row">
            <div>
              <h1>Welcome back, Rahul! 👋</h1>
              <p>Take control of your finances and grow your wealth.</p>
            </div>
            <button className="btn btn-primary">⚡ Quick Actions</button>
          </div>

          {/* journey card + upcoming consultation */}
          <div className="dash-row">
            <div className="dash-card">
              <h3>Your Financial Journey Starts Here</h3>
              <p>
                Complete your financial profile to get personalized AI
                insights and expert recommendations.
              </p>
              <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                <button className="btn btn-primary">Complete Profile</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>

            <div className="dash-card">
              <div className="card-header">
                <h3>Upcoming Consultation</h3>
                <a href="#" style={{ fontSize: "12px", color: "#2f6df6" }}>View All</a>
              </div>

              <div className="consult-card-top">
                <div className="avatar"></div>
                <div>
                  <div className="consult-name-row">
                    <strong style={{ fontSize: "14px" }}>Neha Verma</strong>
                    <span className="badge">Confirmed</span>
                  </div>
                  <p style={{ fontSize: "12px" }}>Financial Advisor</p>
                  <p style={{ fontSize: "12px", marginTop: "5px" }}>📅 20 May 2025, Tuesday</p>
                  <p style={{ fontSize: "12px" }}>🕐 11:00 AM – 12:00 PM</p>
                </div>
              </div>

              <button className="btn btn-outline btn-block" style={{ marginTop: "15px" }}>
                Join Consultation Room
              </button>
            </div>
          </div>

          {/* quick access */}
          <h3 style={{ fontSize: "15px", marginBottom: "12px" }}>Quick Access</h3>
          <div className="quick-access-grid">
            <button className="quick-access-card">
              <div className="card-icon">📈</div>
              <h4>AI Financial Analysis</h4>
              <p>Analyze your financial health</p>
            </button>
            <button className="quick-access-card">
              <div className="card-icon">✨</div>
              <h4>AI Recommendations</h4>
              <p>Get personalized advice</p>
            </button>
            <button className="quick-access-card">
              <div className="card-icon">🔍</div>
              <h4>Find Advisor</h4>
              <p>Connect with experts</p>
            </button>
            <button className="quick-access-card">
              <div className="card-icon">📅</div>
              <h4>Book Consultation</h4>
              <p>Schedule your session</p>
            </button>
            <button className="quick-access-card">
              <div className="card-icon">📄</div>
              <h4>View Reports</h4>
              <p>Access your reports</p>
            </button>
            <button className="quick-access-card">
              <div className="card-icon">🔔</div>
              <h4>Notifications</h4>
              <p>Stay updated with alerts</p>
            </button>
          </div>

          {/* financial overview + recent activity */}
          <div className="two-col">
            <div className="dash-card">
              <div className="card-header">
                <h3>Financial Health Overview</h3>
                <span className="badge">Good</span>
              </div>

              <div className="overview-row">
                <span>Financial Health Score</span>
                <strong style={{ color: "#16a34a" }}>72 / 100</strong>
              </div>
              <div className="overview-row">
                <span>Monthly Income</span>
                <strong>₹1,25,000</strong>
              </div>
              <div className="overview-row">
                <span>Monthly Expenses</span>
                <strong>₹70,500</strong>
              </div>

              <a href="#" style={{ fontSize: "12px", color: "#2f6df6", display: "block", marginTop: "10px" }}>
                View Full Analysis
              </a>
            </div>

            <div className="dash-card">
              <div className="card-header">
                <h3>Recent Activity</h3>
                <a href="#" style={{ fontSize: "12px", color: "#2f6df6" }}>View All</a>
              </div>

              <div className="activity-item">
                ✅
                <div>
                  Consultation confirmed with Neha Verma
                  <span className="time">2 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                ✨
                <div>
                  New AI recommendation generated
                  <span className="time">1 hr ago</span>
                </div>
              </div>
              <div className="activity-item">
                📄
                <div>
                  Financial report generated
                  <span className="time">3 hrs ago</span>
                </div>
              </div>
              <div className="activity-item">
                🔔
                <div>
                  Reminder: Complete your financial profile
                  <span className="time">5 hrs ago</span>
                </div>
              </div>
            </div>
          </div>

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

export default Dashboard;
