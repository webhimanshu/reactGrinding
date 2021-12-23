import React from 'react'
import './covid.css';
const Card = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}

export default Card
