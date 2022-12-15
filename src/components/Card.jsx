import React from "react";


export default function Card(props){
    return (
        <div className="card-container">
            <span className="label">{props.open} </span>
            <img src={props.img} className="photo"></img>
            <div className="info-box">
                <div className="rating">
                    <img src={props.star} className="star"></img>
                    <span className="rating">{(props.rating)}</span>
                    <span className="no-rating"> ({props.reviewCount}) </span>
                    <span className="location">&#x2022; {props.location}</span>
                </div>
                <span className="phrase">{props.title}</span>
                <span className="price">From ${props.price}
                <span className="regular"> / per Person</span>
                </span>
            </div>
        </div>
    )
}