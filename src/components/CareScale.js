import water from "../assets/water.svg";
import sun from "../assets/sun.svg";

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];

	const scaleType = careType === "light" ? <img src={sun} alt="sun-icon" /> : <img src={water} alt="water-icon" />;

	return <div>{range.map((rangeElem) => (scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null))}</div>;
}

export default CareScale;
