import "../styles/Cart.css";
import { useState } from "react";
import CartItem from "./CartItem";

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false);
	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	function updateItemQuantity(name, price, type) {
		const currentPlantSaved = cart.find((plant) => plant.name === name);
		const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
		if (type === "plus") {
			updateCart([...cartFilteredCurrentPlant, { name, price, quantity: currentPlantSaved.quantity + 1 }]);
		} else if (type === "minus" && currentPlantSaved.quantity > 1) {
			updateCart([...cartFilteredCurrentPlant, { name, price, quantity: currentPlantSaved.quantity - 1 }]);
		} else if (type === "minus" && currentPlantSaved.quantity === 1) {
			updateCart(cartFilteredCurrentPlant);
		}
	}

	return isOpen ? (
		total !== 0 ? (
			<div className="lmj-cart">
				<button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
					Fermer
				</button>
				<h2>Panier</h2>
				<div className="lmj-items-list">
					{cart.map((item) => (
						<CartItem key={item.id} cart={cart} item={item} updateCart={updateCart} updateItemQuantity={updateItemQuantity} />
					))}
				</div>
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
