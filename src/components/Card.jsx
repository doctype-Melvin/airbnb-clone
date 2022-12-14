import React from "react";
import photo from '../assets/zaferes.png'
import star from '../assets/star.png'

export default function Card(){
    return (
        <div className="card-container">
            <span className="label">SOLD OUT</span>
            <img src={photo} className="photo"></img>
            <div className="info-box">
                <div className="rating">
                    <img src={star} className="star"></img>
                    <span className="rating">5.0</span>
                    <span className="no-rating"> &#40;6&#41; &#x2022; USA</span>
                </div>
                <span className="phrase">Life lessons with Katie Zaferes</span>
                <span className="price"><b>From $136</b> / person</span>
            </div>
        </div>
    )
}