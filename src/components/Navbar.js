import React from "react";
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="header" id="Home">
            <p>The<span>5 Star</span></p>
            <ul className="navbar">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Dishes">Dishes</a></li>
                <li><a href="#Location">Location</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
