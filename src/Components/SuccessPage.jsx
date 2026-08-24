import { Link } from "react-router-dom";

function SuccessPage() {
  return (

    <main className="page-shell success-shell">
      <section className="success-card">
        <div className="success-icon">✓</div>
        <h1>Meeting Request Sent</h1>
        <p>Your meeting request has been submitted successfully.</p>
        <Link className="request-button success-link" to="/meeting">Request Another Meeting</Link>
      </section>
    </main>
  );
}

export default SuccessPage;