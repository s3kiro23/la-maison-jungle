import Banner from "./Banner.js";
import Cart from "./Cart.js";
import ShoppingList from "./ShoppingList.js";
import logo from "../assets/logo.png";
import Footer from "./Footer.js";
import "../styles/Layout.css";
import Recommendation from "./Recommendation";
import { useState } from "react";


function App() {
	const [cart, updateCart] = useState([]);

	return (
		<div>
			<Banner>
				<div className="lmj-main-content">
					<img src={logo} alt="La maison jungle" className="lmj-logo" />
					<h1 className="lmj-title">La maison jungle</h1>
				</div>
				<Recommendation />
			</Banner>
			<div className="lmj-layout-inner">
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
