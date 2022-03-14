import { Routes, Route, Link, Router, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Splash from './components/Splash/Splash';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Unions from "./components/Unions/Unions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="splash" element={<Splash />} />
        <Route path="unions" element={<Unions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
