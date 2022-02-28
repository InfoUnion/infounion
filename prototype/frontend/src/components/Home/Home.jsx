import { Routes, Route, Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (

        <main>
            <h2>This is our homepage!</h2>
            <p>We're here to inform our workers.</p>
            <nav>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact Us</Link></p>
                <p><Link to="/login">Log in</Link></p>
            </nav>
            <div class='box'></div>
        </main>

    );
}

export default Home;