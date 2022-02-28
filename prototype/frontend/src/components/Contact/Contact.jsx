import { Routes, Route, Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <main>
                <h2>Contact Us!</h2>
                <p>
                    Email us at InfoUnion@calpoly.edu
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Contact;