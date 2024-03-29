import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"

import { FreeMode } from "swiper/modules"

import ReviewItem from "../ReviewItem/ReviewItem"

const ReviewSwiper = () => {
	return (
		<Swiper
		spaceBetween={50}
		slidesPerView={3}
		freeMode={true}
		modules={[FreeMode]}
		breakpoints={{
			360: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1240: {
				slidesPerView: 3,
				spaceBetween: 50,
			}
		}}>
		<div className="review__inner">
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-1.jpg")}
					reviewAuthorName={"Orlando Diggs"}
					reviewAuthorPost={"Junior UI Designer, @Company"}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-2.jpg")}
					reviewAuthorName={"Mollie Hall"}
					reviewAuthorPost={"Design System Manager, @Company "}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-3.jpg")}
					reviewAuthorName={"Lori Bryson"}
					reviewAuthorPost={"UX Designer, @Company"}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-4.jpg")}
					reviewAuthorName={"Zahir Mays"}
					reviewAuthorPost={"Design System Manager, @Company"}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-1.jpg")}
					reviewAuthorName={"Orlando Diggs"}
					reviewAuthorPost={"Junior UI Designer, @Company"}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-2.jpg")}
					reviewAuthorName={"Mollie Hall"}
					reviewAuthorPost={"Design System Manager, @Company "}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-3.jpg")}
					reviewAuthorName={"Lori Bryson"}
					reviewAuthorPost={"UX Designer, @Company"}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<ReviewItem
					reviewText={
						'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."'
					}
					reviewImg={require("../../../img/review/review-4.jpg")}
					reviewAuthorName={"Zahir Mays"}
					reviewAuthorPost={"Design System Manager, @Company"}
				/>
			</SwiperSlide>
		</div>
		</Swiper>
	)
}

export default ReviewSwiper
