import React from "react"
import "./../../scss/main.scss"

import search from "./../../img/nav/search.svg"
import cart from "./../../img/nav/cart.svg"

const navList = [
	{
		title: "Home",
	},
	{
		title: "About",
	},
	{
		title: "Blog",
	},
	{
		title: "Contact",
	},
	{
		title: "Courses",
	},
]

const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__inner">
				<ul className="nav__list">
					{navList.map(item => (
						<li>
							<a href="#" className="nav__link">
								{item.title}
							</a>
						</li>
					))}
				</ul>
				<div className="nav__users">
					<button className="nav__search">
						<img src={search} alt="" />
						Search
					</button>
					<button className="nav__cart">
						<img src={cart} alt="" />
						Cart
					</button>
					<button className="nav__login btn">Sign Up</button>
				</div>
			</div>
		</nav>
	)
}

export default Nav
