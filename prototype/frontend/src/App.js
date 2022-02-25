import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import Home from './components/About/About.js'
import About from './components/Home/Home.js'
import Contact from './components/Contact/Contact.js'
import Login from './components/Login/Login.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to InfoUnion!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
