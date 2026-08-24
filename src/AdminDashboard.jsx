function AdminDashboard() {
  return (
    <div className="dashboard-wrapper">
      {/* ---------- SIDEBAR ---------- */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">F</span>
          <div>
            Fintech
            <span className="logo-subtitle">Admin Portal</span>
          </div>
        </div>

        <nav>
          <a href="#" className="sidebar-link active">🏠 Dashboard</a>
          <a href="#" className="sidebar-link">👤 User Management</a>
          <a href="#" className="sidebar-link">📈 Advisor Management</a>
          <a href="#" className="sidebar-link">📅 Consultation Management</a>
          <a href="#" className="sidebar-link">📊 Financial Analytics</a>
          <a href="#" className="sidebar-link">📄 Reports</a>
          <a href="#" className="sidebar-link">🔔 Notifications</a>
          <a href="#" className="sidebar-link">🗂️ Content Management</a>
          <a href="#" className="sidebar-link">⚙️ System Settings</a>
          <a href="#" className="sidebar-link">👤 Admin Profile</a>
        </nav>

        {/* small system status box at the bottom of the sidebar */}
        <div className="system-box">
          <p className="system-box-title">
            <span className="status-dot"></span> System Overview
          </p>
          <div className="system-row">
            <span>Server Uptime</span>
            <strong>99.8%</strong>
          </div>
          <div className="system-row">
            <span>Last Backup</span>
            <strong>2 hours ago</strong>
          </div>
          <div className="system-row">
            <span>Version</span>
            <strong>v3.5.0</strong>
          </div>
          <button className="btn btn-outline btn-block logout-btn">↩ Logout</button>
        </div>
      </aside>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="main-content">
        <div className="topbar">
          <input type="text" className="search-input" placeholder="🔍 Search anything..." />

          <span className="topbar-bell">🔔</span>

          <div className="user-info">
            <div className="avatar"></div>
            <div>
              <strong style={{ fontSize: "13px", display: "block" }}>Admin</strong>
              <span style={{ fontSize: "11px", color: "#999" }}>Super Administrator</span>
            </div>
          </div>
        </div>

        <div className="page-body">
          {/* page heading */}
          <div className="welcome-row">
            <div>
              <h1>Dashboard</h1>
              <p>Welcome back! Here's what's happening with your platform today.</p>
            </div>
            <button className="btn btn-outline">📅 May 14, 2025 - May 20, 2025</button>
          </div>

          {/* top stat cards */}
          <div className="stat-cards">
            <div className="stat-card">
              <div className="stat-icon icon-blue">👥</div>
              <p className="stat-label">Total Users</p>
              <p className="stat-value">12,458</p>
              <p className="stat-change up">▲ 8.5% vs last week</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon icon-green">👤</div>
              <p className="stat-label">Total Advisors</p>
              <p className="stat-value">1,248</p>
              <p className="stat-change up">▲ 6.3% vs last week</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon icon-purple">📅</div>
              <p className="stat-label">Total Consultations</p>
              <p className="stat-value">3,562</p>
              <p className="stat-change up">▲ 12.7% vs last week</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon icon-orange">₹</div>
              <p className="stat-label">Total Revenue</p>
              <p className="stat-value">₹24,58,900</p>
              <p className="stat-change up">▲ 15.4% vs last week</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon icon-blue">📄</div>
              <p className="stat-label">Reports Generated</p>
              <p className="stat-value">986</p>
              <p className="stat-change up">▲ 9.2% vs last week</p>
            </div>
          </div>

          {/* row 1: platform overview, consultations overview, recent registrations */}
          <div className="three-col">
            <div className="dash-card">
              <h3>Platform Overview</h3>

              <div className="progress-row">
                <span className="progress-label">Active Users</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "70%", background: "#3b6ef6" }}></div>
                </div>
                <span className="progress-value">8,952</span>
              </div>
              <div className="progress-row">
                <span className="progress-label">Inactive Users</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "28%", background: "#e0392c" }}></div>
                </div>
                <span className="progress-value">3,506</span>
              </div>
              <div className="progress-row">
                <span className="progress-label">Verified Advisors</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "85%", background: "#16a34a" }}></div>
                </div>
                <span className="progress-value">1,102</span>
              </div>
              <div className="progress-row">
                <span className="progress-label">Pending Advisors</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "12%", background: "#f5a623" }}></div>
                </div>
                <span className="progress-value">146</span>
              </div>
              <div className="progress-row">
                <span className="progress-label">Ongoing Consultations</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "20%", background: "#8b5cf6" }}></div>
                </div>
                <span className="progress-value">234</span>
              </div>
              <div className="progress-row">
                <span className="progress-label">Completed Consultations</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "95%", background: "#3b6ef6" }}></div>
                </div>
                <span className="progress-value">3,328</span>
              </div>

              <a href="#" className="view-link">View Full Overview →</a>
            </div>

            <div className="dash-card">
              <div className="card-header">
                <h3>Consultations Overview</h3>
                <a href="#" className="view-link">View All</a>
              </div>

              <div className="list-row">
                <span className="dot-icon dot-orange">🕐</span>
                <span className="list-name">Pending</span>
                <strong>58</strong>
              </div>
              <div className="list-row">
                <span className="dot-icon dot-green">✔</span>
                <span className="list-name">Confirmed</span>
                <strong>124</strong>
              </div>
              <div className="list-row">
                <span className="dot-icon dot-purple">⟳</span>
                <span className="list-name">Ongoing</span>
                <strong>34</strong>
              </div>
              <div className="list-row">
                <span className="dot-icon dot-blue">✔</span>
                <span className="list-name">Completed</span>
                <strong>3,328</strong>
              </div>
              <div className="list-row">
                <span className="dot-icon dot-red">✕</span>
                <span className="list-name">Cancelled</span>
                <strong>18</strong>
              </div>
            </div>

            <div className="dash-card">
              <div className="card-header">
                <h3>Recent Registrations</h3>
                <a href="#" className="view-link">View All</a>
              </div>

              <div className="person-row">
                <div className="avatar small"></div>
                <div className="person-info">
                  <strong>Rahul Mehta</strong>
                  <span className="tag tag-blue">User</span>
                </div>
                <span className="time-text">2 min ago</span>
              </div>
              <div className="person-row">
                <div className="avatar small"></div>
                <div className="person-info">
                  <strong>Priya Sharma</strong>
                  <span className="tag tag-blue">User</span>
                </div>
                <span className="time-text">15 min ago</span>
              </div>
              <div className="person-row">
                <div className="avatar small"></div>
                <div className="person-info">
                  <strong>Amit Verma</strong>
                  <span className="tag tag-green">Advisor</span>
                </div>
                <span className="time-text">30 min ago</span>
              </div>
              <div className="person-row">
                <div className="avatar small"></div>
                <div className="person-info">
                  <strong>Neha Gupta</strong>
                  <span className="tag tag-green">Advisor</span>
                </div>
                <span className="time-text">45 min ago</span>
              </div>
              <div className="person-row">
                <div className="avatar small"></div>
                <div className="person-info">
                  <strong>Vikram Singh</strong>
                  <span className="tag tag-blue">User</span>
                </div>
                <span className="time-text">1 hour ago</span>
              </div>

              <a href="#" className="view-link">View All Registrations →</a>
            </div>
          </div>

          {/* row 2: revenue summary, recent activity, system notifications */}
          <div className="three-col">
            <div className="dash-card">
              <div className="card-header">
                <h3>Revenue Summary</h3>
                <a href="#" className="view-link">View Report</a>
              </div>

              <div className="revenue-box">
                <p className="revenue-label">Total Revenue</p>
                <p className="revenue-amount">₹24,58,900</p>
                <p className="revenue-change up">▲ 15.4% vs last week</p>
              </div>

              <div className="revenue-grid">
                <div>
                  <p className="revenue-small-label">This Week</p>
                  <strong>₹6,25,430</strong>
                </div>
                <div>
                  <p className="revenue-small-label">Last Week</p>
                  <strong>₹5,41,230</strong>
                </div>
                <div>
                  <p className="revenue-small-label">This Month</p>
                  <strong>₹24,58,900</strong>
                </div>
                <div>
                  <p className="revenue-small-label">Last Month</p>
                  <strong>₹18,72,450</strong>
                </div>
              </div>
            </div>

            <div className="dash-card">
              <h3>Recent Activity</h3>

              <div className="activity-item">
                🧑
                <div>
                  New user registered
                  <span className="time">Rahul Mehta joined the platform · 2 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                ✅
                <div>
                  Consultation completed
                  <span className="time">Financial consultation completed successfully · 10 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                ₹
                <div>
                  Payment received
                  <span className="time">Payment of ₹2,500 received from Priya Sharma · 20 min ago</span>
                </div>
              </div>
              <div className="activity-item">
                👤
                <div>
                  New advisor registered
                  <span className="time">Amit Verma joined as financial advisor · 45 min ago</span>
                </div>
              </div>
            </div>

            <div className="dash-card">
              <div className="card-header">
                <h3>System Notifications</h3>
                <a href="#" className="view-link">View All</a>
              </div>

              <div className="notif-item notif-red">
                🔴
                <div>
                  High Server Load
                  <span className="time">Server load is at 85%. Please monitor · 5 min ago</span>
                </div>
              </div>
              <div className="notif-item notif-yellow">
                ⚠️
                <div>
                  Storage Almost Full
                  <span className="time">Storage is 92% full. Consider cleanup · 1 hour ago</span>
                </div>
              </div>
              <div className="notif-item notif-blue">
                🔵
                <div>
                  Backup Completed
                  <span className="time">Daily backup completed successfully · 2 hours ago</span>
                </div>
              </div>
              <div className="notif-item notif-green">
                🟢
                <div>
                  All Systems Operational
                  <span className="time">All systems are running smoothly · 3 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
