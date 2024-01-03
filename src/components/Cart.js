import "../styles/Cart.css";

function Cart() {
	const items = [
		{ name: "monstera", price: 8 },
		{ name: "lierre", price: 10 },
		{ name: "bouquet de fleurs", price: 15 },
	];
	const total = items.reduce((acc, item) => acc + item.price, 0);
	return (
		<div className="lmj-cart">
			<h2>Panier</h2>
			<ul>
				{items.map((item, index) => (
					<li key={`${item.name}-${index}`}>
						{item.name} - {item.price}€
					</li>
				))}
			</ul>
			<p>Total: {total}€</p>
		</div>
	);
}

export default Cart;
