import React from 'react'

const TrandCard = ({title, price, bgImg}) => {
   return (
        <div className="card" style={{
            backgroundImage: `url(${bgImg})`,
        }}> 
            <div className="card__content">
                <h4 className="card__suptitle suptitle">Bеginner</h4>
                <h3 className="card__title">{title}</h3>
                <p className="card__price">{price}</p>
            </div>
            <div className="card__footer">
                <button className="card__btn btn">Enroll Course</button>
            </div>
        </div>
)}

export default TrandCard