import React from 'react'

import star from "../../../img/review/star.svg";

const ReviewItem = ({reviewText, reviewImg, reviewAuthorName, reviewAuthorPost}) => {
   return (
    <div className="review">
        <div className="review__content">
            <div className="review__stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <p className="review__text">{reviewText}</p>
        </div>
        <div className="review__author">
            <img src={reviewImg} alt="" />
            <div className="review__author-info">
                <h4 className="review__author-name">{reviewAuthorName}</h4>
                <p className="review__author-post">{reviewAuthorPost}</p>
            </div>
        </div>
    </div>
)}

export default ReviewItem