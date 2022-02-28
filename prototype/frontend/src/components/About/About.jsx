import { Routes, Route, Link } from "react-router-dom";

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    InfoUnion was created with one idea in mind: info on all things job-related, easy to understand, all in one location.
                    Our development team is composed of four geniuses based in San Luis Obispo, CA.
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About;
