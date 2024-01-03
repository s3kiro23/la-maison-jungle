import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem(props) {
	const plant = props.plant;
	return (
		<li className="lmj-plant-item" onClick={() => handleClick(plant.name)}>
			<img src={plant.cover} alt={`${plant.name} cover`} className="lmj-plant-item-cover" />
			{plant.isBestSale && <span>🔥</span>}
			{plant.name}
			{plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
			<CareScale careType="water" scaleValue={plant.water} />
			<CareScale careType="light" scaleValue={plant.light} />
		</li>
	);
}

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem;
