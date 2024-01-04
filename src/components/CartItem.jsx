import "../styles/CartItem.css";

function CartItem({ item, updateItemQuantity }) {
	return (
		<div className="lmj-cart-item-details">
			<span className="lmj-item-details">
				{item.name} {item.price}€ x {item.quantity}{" "}
			</span>
			<div className="lmj-cart-actions">
				<i
					className="fa-solid fa-minus fa-sm lmj-minus"
					data-item="minus"
					onClick={(e) => updateItemQuantity(item.name, item.price, e.target.dataset.item)}
				></i>
				<i className="fa-solid fa-plus fa-sm" data-item="plus" onClick={(e) => updateItemQuantity(item.name, item.price, e.target.dataset.item)}></i>
				<i className="fa-regular fa-trash-can lmj-trash-icon" data-item="trash" onClick={(e) => updateItemQuantity(item.name, item.price, e.target.dataset.item)}></i>
			</div>
		</div>
	);
}

export default CartItem;
