import React from "react"
import "./../../scss/main.scss"
import Nav from "../Nav/Nav"

import play from "./../../img/header/play.svg"
import review from "./../../img/header/review.jpg"
import star from "./../../img/header/star.svg"
import header from "./../../img/header/header.png"

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<Nav />
				<div className="header__inner">
					<div className="header__content">
						<h1 className="header__title">
							Become an No-Code expert and find a job
						</h1>
						<p className="header__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum vel molestie magna curabitur tincidunt nunc sit amet.
						</p>
						<div className="header__btns">
							<button className="header__btn btn">Explore Courses</button>
							<a href="#" className="header__video">
								Watch Video
								<img src={play} alt="" />
							</a>
						</div>
						<div className="header__review">
							<img src={review} alt="" />
							<div className="header__review-info">
								<div className="header__review-stars">
									<img src={star} alt="" />
									<img src={star} alt="" />
									<img src={star} alt="" />
									<img src={star} alt="" />
									<img src={star} alt="" />
								</div>
								<p className="header__review-text">From 3k+ reviews</p>
							</div>
						</div>
					</div>
					<div className="header__img">
						<img src={header} alt="" />
					</div>
				</div>
				<p className="header__subtext">Trusted by the world's best companies</p>
			</div>
		</header>
	)
}

export default Header
