import {Routes, Route, Link, Router, Switch} from "react-router-dom";
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Splash from './components/Splash/Splash'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div class="App">
        <Navbar/>
      <h1 class="welcome">Welcome to InfoUnion!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="splash" element={<Splash />} />
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
