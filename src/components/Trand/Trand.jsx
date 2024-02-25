import React from "react"
import TrandCard from "./TrandCard/TrandCard"

const Trand = () => {
	return (
		<section className="trand">
			<div className="container">
				<div className="trand__header">
					<h3 className="trand__suptitle suptitle">Trending</h3>
					<h2 className="trand__title title">The most popular courses</h2>
					<p className="trand__text text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis
						viverra ornare.
					</p>
				</div>
				<div className="trand__inner">
					<TrandCard
						title={"Webflow Basics"}
						price={"$ 24.00 USD"}
						bgImg={require("./../../img/trand/card-1.png")}
					/>
					<TrandCard
						title={"Webflow Interactions Masterclass"}
						price={"$ 55.00 USD"}
						bgImg={require("./../../img/trand/card-2.png")}
					/>
					<TrandCard
						title={"Advanced CMS and Integrations"}
						price={"$ 38.00 USD"}
						bgImg={require("./../../img/trand/card-3.png")}
					/>
				</div>
			</div>
		</section>
	)
}

export default Trand
