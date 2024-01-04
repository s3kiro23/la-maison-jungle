import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState("");
	const categories = plantList.reduce((acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)), []);

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name);
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
			updateCart([...cartFilteredCurrentPlant, { name, price, quantity: currentPlantSaved.quantity + 1 }]);
		} else {
			updateCart([...cart, { name, price, quantity: 1 }]);
		}
	}

	return (
		<div>
			<Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			<ul className="lmj-plant-list">
				{plantList.map((plant) =>
					!activeCategory || activeCategory === plant.category ? <PlantItem plant={plant} addToCart={addToCart} key={plant.id} /> : null
				)}
			</ul>
		</div>
	);
}

export default ShoppingList;
