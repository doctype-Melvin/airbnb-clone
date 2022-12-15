import React from "react";


function Navbar(props) {
    return (
        <div className="nav-container">
            <img src={props.logo} alt="logo" className="logo"></img>
            <div></div>
        </div>
    )
}

export default Navbar