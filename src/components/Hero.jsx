import React from "react";
import imgGrid from '../assets/Group77.png'

export default function Hero(){
    return (
        <section className="hero-container">
            <img src={imgGrid} className="gridImg"></img>
            <div className="text-container">
                <h1 className="exp">Online Experiences</h1>
                <p className="para">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </section>
    )
}