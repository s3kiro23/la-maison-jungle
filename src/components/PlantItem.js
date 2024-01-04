import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import Swal from "sweetalert2";
import styled, { css } from "styled-components";
import { useState } from "react";

const Button = styled.button`
	background: transparent;
	border-radius: 15px;
	border: 2px solid #31b472;
	color: #31b472;
	font-weight: bold;
	padding: 0.75em 1em;
	cursor: pointer;
	width: 100%;

	&:hover {
		background: #31b472;
		color: white;
		transition: 0.3s;
		box-shadow: 0 0 10px #31b472;
		transform: scale(1.05);
		transition: 0.3s;
	}

	&:active {
		transform: scale(0.95);
		transition: 0.3s;
		box-shadow: none;
	}
`;

const Img = styled.img`
	height: 250px;
	width: 250px;
	border-radius: 20px;
	object-fit: cover;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
		transition: 0.3s;
		box-shadow: 0 0 10px #31b472;
	}
`;

const Soldes = styled.div`
	${({ isImgHovered }) =>
		isImgHovered &&
		css`
			top: -6px;
			left: -5px;
			transform: scale(1.05);
			transition: 0.3s;
		`}
`;

const Price = styled.div`
	${({ isImgHovered }) =>
		isImgHovered &&
		css`
			bottom: 32.8%;
			right: -5px;
			transform: scale(1.05);
			transition: 0.3s;
		`}
`;

function PlantItem(props) {
	const plant = props.plant;
	const [isImgHovered, setIsImgHovered] = useState(false);

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
			confirmButtonColor: "#31b472",
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
			<Img
				src={plant.cover}
				alt={`${plant.name} cover`}
				className="lmj-plant-item-cover"
				onClick={() => modalSwal(plant)}
				onMouseEnter={() => setIsImgHovered(true)}
				onMouseLeave={() => setIsImgHovered(false)}
			/>
			<Price className="lmj-plant-item-price" isImgHovered={isImgHovered}>{plant.price}€</Price>
			{plant.name}
			{plant.isSpecialOffer && (
				<Soldes className="lmj-sales" isImgHovered={isImgHovered}>
					Soldes
				</Soldes>
			)}
			<div className="lmj-carescale">
				<CareScale careType="water" scaleValue={plant.water} />
				<CareScale careType="light" scaleValue={plant.light} />
			</div>
			<Button onClick={() => props.addToCart(plant.name, plant.price)}>Ajouter</Button>
		</li>
	);
}

export default PlantItem;
