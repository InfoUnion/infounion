import {Routes, Route, Link, Router, Switch} from "react-router-dom";
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './logo.svg';

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Splash from './components/Splash/Splash'
import NavBar from "./components/Navbar/Navbar";

import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <h1 className="welcome">Welcome to InfoUnion!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="splash" element={<Splash />} />
      </Routes>

    </div>
  );
}

export default App;
