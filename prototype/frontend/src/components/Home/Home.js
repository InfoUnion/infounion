import { Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
        <>
            <main>
                <h2>This is our homepage!</h2>
                <p>We're here to inform our workers.</p>
            </main>
            <nav>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/contact">Contact Us</Link></p>
                <p><Link to="/login">Log in</Link></p>
                <p><Link to="/search">Search</Link></p>
            </nav>
        </>
    );
}

export default Home;