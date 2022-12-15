import React from "react";


export default function Card(props){
    const star = './public/assets/star.png'
    let labelText
    
        if (props.open === 0) {
            labelText = 'SOLD OUT'
        }else if (props.location === 'Online') {
            labelText = 'ONLINE'
    }  
    
    return (
        <div className="card-container">
            {/* Use conditional rendering for label text */}
        {labelText && <span className="label">{labelText}</span>}
            <img src={props.coverImg} className="photo"></img>
            <div className="info-box">
                <div className="rating">
                    <img src={star} className="star"></img>
                    <span className="rating">{(props.stats.rating)}</span>
                    <span className="no-rating"> ({props.stats.reviewCount}) </span>
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