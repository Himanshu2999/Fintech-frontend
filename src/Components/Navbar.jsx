import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const nav = useNavigate();
    return (
        <>
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
                    <button onClick={()=>nav('/login')} className="btn btn-outline">Log In</button>
                    <button onClick={()=>nav('/signup')} className="btn btn-primary">Sign Up</button>
                </div>
            </header>
        </>
    );
}

export default Navbar;