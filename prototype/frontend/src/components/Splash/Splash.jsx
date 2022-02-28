import { Routes, Route, Link } from "react-router-dom";
import './Splash.css'

function Splash() {
    return (

        <main>
            <h2>This is our Search!</h2>
            <p>We're here to inform our workers bringing you the knowledge.</p>
            <nav>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact Us</Link></p>
                <p><Link to="/login">Log in</Link></p>
                <p><Link to="/">Home</Link></p>
            </nav>
        </main>

    );
}

export default Splash;