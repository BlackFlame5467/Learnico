import React from "react"
import Item from "../Item/Item"

import itemIconOne from "../../img/icon/icon-4.svg"
import itemIconTwo from "../../img/icon/icon-5.svg"
import itemIconThree from "../../img/icon/icon-6.svg"
import itemIconFour from "../../img/icon/icon-7.svg"
import benefitImg from "../../img/benefit/benefit-img.jpg"

const Benefit = () => {
	return (
		<section className="benefit">
			<div className="container">
				<div className="benefit__header">
					<h3 className="benefit__suptitle suptitle">Benefits</h3>
					<h2 className="benefit__title title">
						Grow your knowledge from best teachers in the industry
					</h2>
					<p className="benefit__text text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis
						viverra ornare.
					</p>
				</div>
				<div className="benefit__inner">
					<div className="benefit__items">
						<Item
							itemIcon={itemIconOne}
							itemTitle={"Over 430+ hours of lessons"}
							itemText={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
							}
							itemClass={"benefit__item"}
							itemIconClass={"benefit__icon"}
							itemTitleClass={"benefit__item-title"}
						/>
						<Item
							itemIcon={itemIconTwo}
							itemTitle={"40+ teachers"}
							itemText={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
							}
							itemClass={"benefit__item"}
							itemIconClass={"benefit__icon"}
							itemTitleClass={"benefit__item-title"}
						/>
					</div>
					<img src={benefitImg} alt="" />
					<div className="benefit__items">
						<Item
							itemIcon={itemIconThree}
							itemTitle={"Online community"}
							itemText={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
							}
							itemClass={"benefit__item"}
							itemIconClass={"benefit__icon"}
							itemTitleClass={"benefit__item-title"}
						/>
						<Item
							itemIcon={itemIconFour}
							itemTitle={"1-on-1 coaching"}
							itemText={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
							}
							itemClass={"benefit__item"}
							itemIconClass={"benefit__icon"}
							itemTitleClass={"benefit__item-title"}
						/>
					</div>
				</div>
				<button className="benefit__btn btn">Get Started</button>
			</div>
			<div></div>
		</section>
	)
}

export default Benefit
