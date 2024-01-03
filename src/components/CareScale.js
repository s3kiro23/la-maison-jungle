import water from "../assets/water.svg";
import sun from "../assets/sun.svg";

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];

	const scaleType = careType === "light" ? <img src={sun} alt="sun-icon" /> : <img src={water} alt="water-icon" />;

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={() => handleClick(careType, scaleValue)}>
						{scaleType}
					</span>
				) : null
			)}
		</div>
	);
}

function handleClick(careType, scaleValue) {
	const careTypeFinal = careType === "light" ? "de lumière" : "d'arrosage";
	switch (scaleValue) {
		case 1:
			alert(`Cette plante requiert peu ${careTypeFinal}!`);
			break;
		case 2:
			alert(`Cette plante requiert modérement ${careTypeFinal}!`);
			break;
		default:
			alert(`Cette plante requiert beaucoup ${careTypeFinal}!`);
	}
}

export default CareScale;
