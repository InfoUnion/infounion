import { Routes, Route, Link, Router, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.scss';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import {Login} from './components/Login/Login1';
import {Register} from './components/Register/Register1';
import Splash from './components/Splash/Splash';
import Unions from './components/Unions/Unions';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import App1 from "./components/Login/App1";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<App1 />} />
            <Route path="register" element={<Register />} />
            <Route path="splash" element={<Splash />} />
            <Route path="unions" element={<Unions />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
