import React from "react"
import BlogItem from "./BlogItem.jsx/BlogItem"

const Blog = () => {
	return (
		<section className="blog">
			<div className="container">
				<h3 className="blog__suptitle suptitle">Blog</h3>
				<div className="blog__header">
					<h2 className="blog__title title">Our latest posts</h2>
					<button className="blog__btn btn">View all</button>
				</div>
				<div className="blog__list">
					<BlogItem
						blogItemImg={require("../../img/blog/blog-1.jpg")}
						blogItemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."}
						blogItemTitle={"7 freelance mistakes to avoid"}
						blogItemPost={"Freelance"}
					/>
					<BlogItem
						blogItemImg={require("../../img/blog/blog-2.jpg")}
						blogItemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."}
						blogItemTitle={"Brand design process explained"}
						blogItemPost={"UI/UX Design"}
					/>
					<BlogItem
						blogItemImg={require("../../img/blog/blog-3.jpg")}
						blogItemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."}
						blogItemTitle={"The beginner’s guide to recruiting a Webflow developer"}
						blogItemPost={"Business"}
					/>
				</div>
			</div>
		</section>
	)
}

export default Blog
