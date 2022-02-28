import {  Link } from "react-router-dom";
import "./Navbar.css"
import React from "react";

const NavBar= () =>{
    return (
        <header className="header">
            <div className="left">
                <Link to="/">InfoUnion</Link>
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
                            <Link to="/splash">Search</Link>
                        </li>

                </ul>

        </div>
            <div class="right">
                <Link to="/login">Login</Link>
            </div>

        </header>

    );
}
export default NavBar;