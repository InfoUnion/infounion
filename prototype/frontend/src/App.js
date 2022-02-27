import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Login from './components/Login/Login.js'
import Splash from './components/Splash/Frame12/index'

import Logo from './components/Splash/Frame12/infounion--1@2x.png'
import Drop from "./components/Splash/Frame12/drop-down-box-3@2x.png"

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
          <Route path="search" element={<Splash splashProps={frame12Data.splashProps}/>} />
      </Routes>
    </div>
  );
}

export default App;

const splashData = {
  infounion: Logo,
  spanText1: "I am a/an",
  occupationDropDown: Drop,
  spanText2: "Occupation",
  spanText3: "based in",
  locationDropDown: Drop,
  spanText4: "Location",
  spanText5: "I want",
  informationDropDown: Drop,
  spanText6: "Information",
  frame6: "./components/Splash/Frame12/frame-6-1@2x.png",
  frame7: "./components/Splash/Frame12/img/frame-7-1@2x.png",
};

const frame12Data = {
  splashProps: splashData,
};
