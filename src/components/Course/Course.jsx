import React from "react"

import arrow from "../../img/course/arrow-right.svg"

const Course = ({ title, img, classInner, classCourse }) => {
	return (
		<section className={`course ${classCourse}`}>
			<div className="container">
				<div className={`course__inner ${classInner}`}>
					<img src={img} alt="" className="course__img" />
					<div className="course__content">
						<h2 className="course__title title">{title}</h2>
						<p className="course__text text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
							libero vitae erat.
						</p>
						<div className="course__btns">
							<button className="course__btn btn">Get started</button>
							<a href="#" className="course__link">
								Learn more
								<img src={arrow} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Course
