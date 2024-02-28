import React from "react"

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

const Burger = ({ active, setActive }) => {
	return (
		<div className={active ? "burger active" : "burger"}>
			<nav className="burger__menu">
				<ul className="burger__list">
					{navList.map(item => (
						<li>
							<a href="#" className="burger__link">
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Burger
