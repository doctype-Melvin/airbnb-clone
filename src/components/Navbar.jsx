import React from "react";
import logo from '../assets/pngwing.com.png'

function Navbar() {
    return (
        <div className="nav-container">
            <img src={logo} alt="logo" className="logo"></img>
            <div></div>
        </div>
    )
}

export default Navbar