import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Test } from './components/Union_List_Page/Unions.js';


function App() {
  return (
    <div className="App">
      <h1>Welcome to InfoUnion!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="unions" element={<Unions />} />
      </Routes>
    </div>
  );
}


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
        <p><Link to="/unions">Unions</Link></p>
      </nav>
    </>
  );
}

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

function Login() {
  return (
    <>
      <main>
        <h2>Log in to your InfoUnion account</h2>
        <p>
          Webpage currently under construction!
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;

