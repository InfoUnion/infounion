import { Routes, Route, Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (

        <main>
            <div class='space'></div>
            <div>
                <h2>This is our homepage!</h2>
                <p>We're here to inform our workers.</p>
            </div>
            <div class='space'></div>
            <div>
                <h1 class='placeholder'>HOME PAGE</h1>
                <h1 class='placeholder'>ANNOUNCEMENTS</h1>
                <h1 class='placeholder'>UPDATES</h1>
                <h1 class='placeholder'>NEW ADDITIONS</h1>
            </div>
        </main>

    );
}

export default Home;