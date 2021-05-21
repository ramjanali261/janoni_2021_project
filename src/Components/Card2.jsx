import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className='card-container'>
                <span className="card_category">{props.title}</span>
                <h3 className="card_title">{props.about}</h3>
            </div>
        </>
    )
}

export default Card;
