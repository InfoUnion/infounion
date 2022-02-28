import {  Link } from "react-router-dom";
import "./Navbar.css"
import React from "react";

const NavBar= () =>{
    return (
        <header className="header">
            <div className="left">
                <a href="#">InfoUnion</a>
            </div>
    <div className="mid">
                <ul className="navbar">
                    <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>

                </ul>

        </div>
            <div class="right">
                <a href="#">Welcome</a>
            </div>

        </header>

    );
}
export default NavBar;