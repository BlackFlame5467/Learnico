import React from "react"
import ReactDOM from "react-dom/client"
import "./scss/main.scss"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Course from "./components/Course/Course"
import Trand from "./components/Trand/Trand"
import Join from "./components/Join/Join"
import Benefit from "./components/Benefit/Benefit"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Header />
		<main className="main">
			<About />
			<Course
				img={require("./img/course/course-img.jpg")}
				title={"Premium courses from the industry leaders"}
				classInner={"course__inner--1"}
				classCourse={"course--1"}
			/>
			<Course
				img={require("./img/course/course-img__2.jpg")}
				title={"Easily find the perfect course for you"}
				classInner={"course__inner--2"}
				classCourse={"course--2"}
			/>
			<Trand />
			<Join />
			<Benefit />
		</main>
	</React.StrictMode>
)
