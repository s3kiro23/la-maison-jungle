import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem(props) {
	const plant = props.plant;
	return (
		<li className="lmj-plant-item">
			<img src={plant.cover} alt={`${plant.name} cover`} className="lmj-plant-item-cover" onClick={() => handleClick(plant.name)}/>
			<div className='lmj-plant-item-price'>{plant.price}€</div>
			{plant.isBestSale && <span>🔥</span>}
			{plant.name}
			{plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
			<div className="lmj-carescale">
				<CareScale careType="water" scaleValue={plant.water} />
				<CareScale careType="light" scaleValue={plant.light} />
			</div>
			<button onClick={() => props.addToCart(plant.name, plant.price)}>Ajouter</button>
		</li>
	);
}

export default PlantItem;
