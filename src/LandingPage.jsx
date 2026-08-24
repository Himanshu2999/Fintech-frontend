import { useState } from "react";
import { useNavigate } from "react-router-dom";
import a1 from "./assets/imgtk.png"

function LandingPage() {
  // which FAQ is currently open (-1 means none open)
  const [openFaq, setOpenFaq] = useState(-1);
  const nav = useNavigate('')
  function toggleFaq(index) {
    if (openFaq === index) {
      setOpenFaq(-1); // clicked the same one again, so close it
    } else {
      setOpenFaq(index);
    }
  }

  const [name, setname] = useState('');
  const [email , setmail] = useState('');
  const [subject, setbject] = useState('');
  const [msg, setmsg] = useState('');

  const sendmail = async() =>{
    const data = {name, email, subject, msg}
    const resp = await fetch("https://hook.us2.make.com/swpmaisb7awjvychvzdoovxyuatwkcpw",
      {
        method: "post",
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
      }
    )

    if(resp.ok){
      alert("Message sended successfully")
    }
  }

  return (
    <div>
      {/* ---------- NAVBAR ---------- */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">F</span>
          Fintech
        </div>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-buttons">
          <button onClick={()=>nav('/login')}  className="btn btn-outline">Log In</button>
          <button onClick={()=>nav('/signup')} className="btn btn-primary">Sign Up</button>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              Smarter Decisions for a Better Financial <span>Future</span>
            </h1>
            <p>
              AI-powered financial analysis, personalized advice, and expert
              consultations — all in one place.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">▶ Watch Demo</button>
            </div>

            <div className="hero-highlights">
              <div>
                <h4>AI-Powered Insights</h4>
                <p>Smart recommendations for you</p>
              </div>
              <div>
                <h4>Expert Advisors</h4>
                <p>Connect with verified experts</p>
              </div>
              <div>
                <h4>Secure & Private</h4>
                <p>Your data is 100% safe</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="score-card">
              <p className="label">Financial Health Score</p>
              <p className="score">
                750 <span className="score-status">Excellent</span>
              </p>

              <p className="label" style={{ marginTop: "15px" }}>
                Monthly Overview
              </p>
              <p style={{ fontSize: "13px", marginTop: "5px" }}>
                Income: <strong style={{ color: "#16a34a" }}>₹1,25,000</strong>
                &nbsp;|&nbsp;
                Expenses: <strong style={{ color: "#dc2626" }}>₹70,500</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about">
        <div className="container about-content">
          <div className="about-image"> <img src={a1} width={"500px"}/></div>

          <div className="about-text">
            <p className="eyebrow">About Us</p>
            <h2>About Fintech</h2>
            <p>
              Fintech is an AI-driven platform that helps you take control of
              your financial future. We combine advanced analytics with
              expert guidance to help you save more, invest smarter, and
              achieve your goals.
            </p>

            <div className="stats">
              <div>
                <h3>10K+</h3>
                <p>Happy Users</p>
              </div>
              <div>
                <h3>200+</h3>
                <p>Expert Advisors</p>
              </div>
              <div>
                <h3>98%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Our Services</p>
            <h2>Everything You Need for Financial Success</h2>
          </div>

          <div className="card-grid">
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>AI Financial Analysis</h3>
              <p>Get a deep analysis of your financial health using AI.</p>
            </div>
            <div className="card">
              <div className="card-icon">💡</div>
              <h3>Personalized Recommendations</h3>
              <p>Receive customized advice to improve your finances.</p>
            </div>
            <div className="card">
              <div className="card-icon">👥</div>
              <h3>Expert Consultations</h3>
              <p>Book 1:1 video consultations with verified advisors.</p>
            </div>
            <div className="card">
              <div className="card-icon">📄</div>
              <h3>Reports & Insights</h3>
              <p>Generate detailed reports to track your progress.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Stay updated with reminders and important alerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">How It Works</p>
            <h2>Simple Steps to Financial Freedom</h2>
          </div>

          <div className="steps">
            <div>
              <div className="step-icon">1</div>
              <h3>Create Account</h3>
              <p>Sign up and complete your profile.</p>
            </div>
            <div>
              <div className="step-icon">2</div>
              <h3>Add Financial Info</h3>
              <p>Add your income and expenses.</p>
            </div>
            <div>
              <div className="step-icon">3</div>
              <h3>Get AI Analysis</h3>
              <p>Our AI analyzes your data.</p>
            </div>
            <div>
              <div className="step-icon">4</div>
              <h3>Get Recommendations</h3>
              <p>Receive personalized advice.</p>
            </div>
            <div>
              <div className="step-icon">5</div>
              <h3>Consult & Grow</h3>
              <p>Book a session with an expert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section>
        <div className="cta-banner">
          <div>
            <p>🚀 Ready to Take Control of Your Financial Future?</p>
            <p>
              Join thousands of users already improving their financial
              health with Fintech.
            </p>
          </div>
          <button className="btn" style={{ background: "white", color: "#2f6df6" }}>
            Get Started Now
          </button>
        </div>
      </section>

      {/* ---------- CONTACT + FAQ ---------- */}
      <section id="contact">
        <div className="container contact-faq">
          {/* contact form */}
          <div className="contact-form">
            <p className="eyebrow">Contact Us</p>
            <h2 style={{ marginBottom: "20px" }}>We'd Love to Hear from You!</h2>

            <div className="form-row">
              <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="Your Name" />
              <input onChange={(e)=>setmail(e.target.value)} type="email" placeholder="Email Address" />
            </div>
            <input onChange={(e)=>setbject(e.target.value)} type="text" placeholder="Subject" />
            <textarea onChange={(e)=>setmsg(e.target.value)} rows="4" placeholder="Message"></textarea>
            <button onClick={sendmail} className="btn btn-primary">Send Message</button>
          </div>

          {/* faq accordion */}
          <div className="faq-list" id="faq">
            <p className="eyebrow">FAQ</p>
            <h2 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h2>

            <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(0)}>
                What is Fintech?
                <span className="faq-arrow">▾</span>
              </button>
              <div className="faq-answer">
                <p>
                  Fintech is an AI-driven platform that helps you understand
                  your finances and connect with real advisors.
                </p>
              </div>
            </div>

            <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                How does AI analysis work?
                <span className="faq-arrow">▾</span>
              </button>
              <div className="faq-answer">
                <p>
                  Once you add your income and expenses, our AI scores your
                  financial health and gives suggestions.
                </p>
              </div>
            </div>

            <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                Is my data secure?
                <span className="faq-arrow">▾</span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. Your information is encrypted and never shared
                  without your permission.
                </p>
              </div>
            </div>

            <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                How can I book a consultation?
                <span className="faq-arrow">▾</span>
              </button>
              <div className="faq-answer">
                <p>
                  Go to "Find Advisor" on your dashboard, pick an expert, and
                  choose a time that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ color: "white" }}>
              <span className="logo-icon">F</span>
              Fintech
            </div>
            <p style={{ marginTop: "10px", fontSize: "13px", color: "#999" }}>
              Empowering you to make smarter financial decisions.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li>AI Analysis</li>
              <li>Recommendations</li>
              <li>Consultations</li>
              <li>Reports</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">© 2026 Fintech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
