import React from "react"

import arrow from "../../../img/blog/arrow-right.svg";

const BlogItem = ({blogItemImg, blogItemPost, blogItemTitle, blogItemText}) => {
	return (
        <div className="blog__item">
            <img src={blogItemImg} alt="" />
            <div className="blog__item-inner">
                <div className="blog__item-content">
                    <h4 className="blog__item-post suptitle">{blogItemPost}</h4>
                    <h3 className="blog__item-title">{blogItemTitle}</h3>
                    <p className="blog__item-text">{blogItemText}</p>
                </div>
                <a href="" className="blog__item-link">
                    Read more
                    <img src={arrow} alt="" />
                </a>
            </div>
        </div>
)}

export default BlogItem
