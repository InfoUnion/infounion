import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'

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
