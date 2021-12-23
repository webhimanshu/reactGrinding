import React from 'react'
import './card.css';
const CardItem = (props) => {
    return (
        <div className="card-item">
            <figure className="cards-item-pic" >
           
           <img src={props.src} alt="img-1"/>
           <label>{props.label}</label>
            </figure>
            <div className="card-item-info">
             <h3 className="card-item-text">{props.text}</h3>
             
            </div>
        </div>
    )
}

export default CardItem
