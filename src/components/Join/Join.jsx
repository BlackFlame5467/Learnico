import React from "react"

import joinImg from "./../../img/join/join-img.jpg"
import itemFirst from "./../../img/icon/icon-1.svg"
import itemSecond from "./../../img/icon/icon-2.svg"
import itemThird from "./../../img/icon/icon-3.svg"
import Item from "../Item/Item"

const Join = () => {
	return (
		<section className="join">
			<div className="container">
				<div className="join__inner">
					<div className="join__content">
						<div className="join__header">
							<h3 className="join__suptitle suptitle">Join us</h3>
							<h2 className="join__title title">
								Join more than 17,000+ students all over the world
							</h2>
							<p className="join__text text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique. Duis
								cursus, mi quis viverra ornare.
							</p>
						</div>
						<div className="join__footer">
							<button className="join__btn btn">Get started</button>
						</div>
					</div>
					<img src={joinImg} alt="" />
				</div>
				<div className="join__list">
					<Item
						itemIcon={itemFirst}
						itemTitle={"Browse our courses"}
						itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra."}
					/><Item
						itemIcon={itemSecond}
						itemTitle={"Purchase quickly and securely"}
						itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra."}
					/><Item
						itemIcon={itemThird}
						itemTitle={"Start learning right away"}
						itemText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra."}
					/>
				</div>
			</div>
		</section>
	)
}

export default Join
