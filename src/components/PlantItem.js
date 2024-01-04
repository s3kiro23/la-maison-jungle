import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import Swal from "sweetalert2";

function PlantItem(props) {
	const plant = props.plant;

	function handleCareType(careType, scaleValue) {
		const careTypeFinal = careType === "light" ? "de lumière" : "d'arrosage";
		switch (scaleValue) {
			case 1:
				return `peu ${careTypeFinal}`;
			case 2:
				return `modérement ${careTypeFinal}`;
			default:
				return `beaucoup ${careTypeFinal}`;
		}
	}

	function modalSwal(plant) {
		Swal.fire({
			title: `${plant.name.toUpperCase()}`,
			html: `
				<div class="lmj-modal-content">
					Vous voulez acheter 1 ${plant.name}? Très bon choix 🌱✨
					<br>
					${plant.isBestSale ? "<span>🔥 Cette plante fait partie de nos best seller !</span><br>" : ""} 
					<h4>Entretien:</h4>
					<p>
						Cette plante requiert ${handleCareType("water", plant.water)} et ${handleCareType("light", plant.light)}.
					</p>
					<h4>Description:</h4>
					<p>${plant.description}</p>
				</div>
			`,
			imageUrl: `${plant.cover}`,
			imageWidth: 400,
			imageHeight: 400,
			imageAlt: "Custom image",
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
			confirmButtonText: `
			  <i class="fa fa-thumbs-up"></i> Great!
			`,
			confirmButtonAriaLabel: "Thumbs up, great!",
			cancelButtonText: `
			  <i class="fa fa-thumbs-down"></i>
			`,
			cancelButtonAriaLabel: "Thumbs down",
		});
	}

	return (
		<li className="lmj-plant-item">
			<img src={plant.cover} alt={`${plant.name} cover`} className="lmj-plant-item-cover" onClick={() => modalSwal(plant)} />
			<div className="lmj-plant-item-price">{plant.price}€</div>
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
