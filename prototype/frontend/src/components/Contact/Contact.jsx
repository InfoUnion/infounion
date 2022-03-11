import { Routes, Route, Link } from "react-router-dom";
import './Contact.css';

function Contact() {
    return (
        <>
            <main>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <div class='space'></div>
                <h2>Contact Us!</h2>
                <p>
                    Email us at InfoUnion@calpoly.edu
                </p>
            </main>

        </>
    );
}

export default Contact;