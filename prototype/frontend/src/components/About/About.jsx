import { Routes, Route, Link } from "react-router-dom";
import './About.css'

function About() {
    return (
        <>
            <main class="about-main">
                <div class="about-question-container">
                    <h2 class="about-question">Who are we?</h2>
                </div>
                <div class="about-blurb-container">
                    <p class="about-blurb">
                        InfoUnion was created with one idea in mind: info on all things job-related, easy to understand, all in one location.
                        Our development team is composed of four geniuses based in San Luis Obispo, CA.
                    </p>
                </div>
            </main>
        </>
    );
}

export default About;
