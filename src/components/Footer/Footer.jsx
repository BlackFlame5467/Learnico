import React from "react"

import fb from "../../img/footer/footer-1.svg"
import twitter from "../../img/footer/footer-2.svg"
import inst from "../../img/footer/footer-3.svg"

const pagesList = [
	{
		title: "Home",
	},
	{
		title: "About",
	},
	{
		title: "Contact",
	},
	{
		title: "Blog",
	},
	{
		title: "Courses",
	},
	{
		title: "Teachers",
	},
]
const CMSList = [
	{
		title: "Blog Post",
	},
	{
		title: "Blog Categories",
	},
	{
		title: "Courses Single",
	},
	{
		title: "Courses Categories",
	},
	{
		title: "Product Page",
	},
	{
		title: "Product Categories",
	},
	{
		title: "Teachers Single",
	},
	{
		title: "Episode Single",
	},
]
const accountList = [
	{
		title: "Login",
	},
	{
		title: "Sign Up",
	},
	{
		title: "Forgot Password",
	},
	{
		title: "Reset Password",
	},
	{
		title: "Email Confirmation",
	},
]
const utilityList = [
	{
		title: "Style Guide",
	},
	{
		title: "Changelog",
	},
	{
		title: "Licenses",
	},
	{
		title: "404",
	},
	{
		title: "Password",
	},
]

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<div className="footer__form">
						<h4 className="footer__form-title">
							Join our newsletter to stay up to date on features and releases.
						</h4>
						<form action="" className="form">
							<input type="text" className="form__input" />
							<button className="form__btn btn">Subscribe</button>
						</form>
					</div>
					<div className="footer__links">
						<nav className="footer__nav">
							<h4 className="footer__nav-title">Pages</h4>
							<ul className="footer__list">
								{pagesList.map(page => (
									<li>
										<a href="#" className="footer__link">
											{page.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<nav className="footer__nav">
							<h4 className="footer__nav-title">CMS Pages</h4>
							<ul className="footer__list">
								{CMSList.map(page => (
									<li>
										<a href="#" className="footer__link">
											{page.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<nav className="footer__nav">
							<h4 className="footer__nav-title">Account Pages</h4>
							<ul className="footer__list">
								{accountList.map(page => (
									<li>
										<a href="#" className="footer__link">
											{page.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<nav className="footer__nav">
							<h4 className="footer__nav-title">Utility Pages</h4>
							<ul className="footer__list">
								{utilityList.map(page => (
									<li>
										<a href="#" className="footer__link">
											{page.title}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
				<div className="footer__footer">
					<p className="footer__footer-title">
						© Learnico by Minimal Square. Powered by Webflow.
					</p>
					<div className="footer__socials">
						<a href="" className="footer__social">
							<img src={fb} alt="" />
						</a>
						<a href="" className="footer__social">
							<img src={twitter} alt="" />
						</a>
						<a href="" className="footer__social">
							<img src={inst} alt="" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
