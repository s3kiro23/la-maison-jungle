import "../styles/Cart.css";
import { useState } from "react";

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false);
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	return isOpen ? (
		total !== 0 ? (
			<div className="lmj-cart">
				<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
					Fermer
				</button>
				<h2>Panier</h2>
				{cart.map((item) => (
					<div>
						{item.name} {item.price}€ x {item.quantity}
					</div>
				))}
				<h3>Total: {total}€</h3>
				<button onClick={() => updateCart([])}>Vider le panier</button>
			</div>
		) : (
			<div className="lmj-cart">
				<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
					Fermer
				</button>
				<p>Votre panier est vide.</p>
			</div>
		)
	) : (
		<div className="lmj-cart-closed">
			<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>
				Ouvrir le panier
			</button>
		</div>
	);
}

export default Cart;
