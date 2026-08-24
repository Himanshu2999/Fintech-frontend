const  SignSection = () => {
  return (
    <>
    
    <div className="auth-left">
            <h1>
              Create Your <span>Fintech</span> Account
            </h1>
            <p>
              Join thousands of users who are achieving their financial
              goals with Fintech.
            </p>

            {/* small illustration reusing the score card look */}
            <div className="auth-illustration">
              <div className="score-card">
                <p className="label">Financial Health Score</p>
                <p className="score">
                  750 <span className="score-status">Excellent</span>
                </p>
              </div>
            </div>

            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <div>
                  <h4>Secure & Private</h4>
                  <p>Your data is 100% secure and encrypted with bank-level security.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <h4>AI-Powered Insights</h4>
                  <p>Get personalized financial insights and recommendations powered by AI.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <div>
                  <h4>Expert Guidance</h4>
                  <p>Connect with verified financial experts and advisors.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🕐</span>
                <div>
                  <h4>24/7 Support</h4>
                  <p>We're here to help you at every step of your financial journey.</p>
                </div>
              </div>
            </div>

            <div className="trusted-row">
              <div className="trusted-avatars">
                <div className="mini-avatar"></div>
                <div className="mini-avatar"></div>
                <div className="mini-avatar"></div>
              </div>
              <span>Trusted by 10,000+ users across India</span>
            </div>
          </div>
    </>
  );
};

export default SignSection;