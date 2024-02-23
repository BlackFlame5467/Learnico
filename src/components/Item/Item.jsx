import React from "react"
const Item = ({
	itemIcon,
	itemTitle,
	itemText,
	itemClass,
	itemIconClass,
	itemTitleClass,
}) => {
	return (
		<div className={`item ${itemClass}`}>
			<div className={`item__icon ${itemIconClass}`}>
				<img src={itemIcon} alt="" />
			</div>
			<h3 className={`item__title ${itemTitleClass}`}>{itemTitle}</h3>
			<p className="item__text">{itemText}</p>
		</div>
	)
}

export default Item
