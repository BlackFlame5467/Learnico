import React from "react"
import ReviewSwiper from "./ReviewSwiper/ReviewSwiper"

const Review = () => {
	return (
		<section className="reviews">
			<div className="container">
				<div className="reviews__inner">
					<div className="reviews__header">
						<h3 className="reviews__suptitle suptitle">Testimonials</h3>
						<h2 className="reviews__title title">What our students say</h2>
						<p className="reviews__text text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
					<ReviewSwiper />
				</div>
			</div>
		</section>
	)
}

export default Review
