import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className='card-container'>
                <div className="card">
                    <div className="title">
                        <span>{props.title}</span>
                    </div>
                    <div className="about">
                        <h3 >{props.about}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
