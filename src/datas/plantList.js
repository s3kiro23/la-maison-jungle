import monstera from "../assets/monstera.jpg";
import lyrata from "../assets/lyrata.jpg";
import pothos from "../assets/pothos.jpg";
import succulent from "../assets/succulent.jpg";
import olivier from "../assets/olivier.jpg";
import basil from "../assets/basil.jpg";
import mint from "../assets/mint.jpg";
import calathea from "../assets/calathea.jpg";
import cactus from "../assets/cactus.jpg";

export const plantList = [
	{
		name: "monstera",
		category: "classique",
		id: "1ed",
		light: 2,
		water: 3,
		cover: monstera,
		isSpecialOffer: true,
		isBestSale: true,
		description:
			"Les espèces du genre Monstera sont des plantes grimpantes, aux tiges ligneuses. La tige centrale développe d'épaisses racines aériennes qui s'agrippent au support. Elles portent de grandes feuilles tendres, vertes ou panachées, pouvant atteindre 60 cm de large.",
		price: 15,
	},
	{
		name: "ficus lyrata",
		category: "classique",
		id: "2ab",
		light: 3,
		water: 1,
		cover: lyrata,
		isBestSale: false,
		description:
			"Le Ficus Lyrata est une plante tropicale originaire d'Afrique de l'Ouest. Elle se distingue par ses grandes feuilles coriaces et brillantes, en forme de violon ou de lyre, d'où son nom commun. Les feuilles sont vert foncé et peuvent atteindre une taille allant de 30 à 45 centimètres de long.",
		price: 16,
	},

	{
		name: "pothos argenté",
		category: "classique",
		id: "3sd",
		light: 1,
		water: 2,
		cover: pothos,
		isBestSale: false,
		description:
			"Le Pothos argenté est une plante tropicale grimpante originaire d'Asie. Faisant partie de la famille des Araceae, il est caractérisé par son feuillages en forme d'As et ses taches d'argent. Pouvant supporter des températures allant jusqu'à 15°C, le pothos argenté est un bon compagnon d'intérieur.",
		price: 19,
	},
	{
		name: "calathea",
		category: "classique",
		id: "4kk",
		light: 2,
		water: 3,
		cover: calathea,
		isBestSale: false,
		description:
			"Le calathea est une plante originaire d'Amérique du Sud. Elle se plaît sous les climats chauds et humides ; sous nos latitudes, on la cultive comme une plante d'intérieur.",
		price: 14,
	},
	{
		name: "olivier",
		category: "extérieur",
		id: "5pl",
		light: 3,
		water: 1,
		cover: olivier,
		description: "L'olivier est un arbre typiquement méditerranéen, de 6 à 8 m de hauteur, a tronc tortueux et à écorce grisâtre et crevassée. Les feuilles sont blanches argentées à la face inférieure, vertes grisâtres à la face supérieure, opposées, persistantes, coriaces et lancéolées.",
		price: 19,
	},

	{
		name: "cactus",
		category: "plante grasse",
		id: "8fp",
		light: 2,
		water: 1,
		cover: cactus,
		isSpecialOffer: true,
		isBestSale: true,
		description: "Les cactus sont des plantes grasses, dont la caractéristique première est de posséder des aréoles, sortes de creux dans leur épiderme d'où partent épines, fleurs, feuilles (rarement), nouveaux segments ou glochides (qui sont des épines toutes petites et regroupées).",
		price: 11,
	},
	{
		name: "basilique",
		category: "extérieur",
		id: "7ie",
		light: 2,
		water: 3,
		cover: basil,
		isBestSale: true,
		description: "Le Basilic est une plante herbacée annuelle de 15 à 50 cm. Sa tige est dressée, rameuse et quadrangulaire. Ses feuilles sont entières, ovales, vert pâle à vert foncé. Ses inflorescences sont en longs épis terminaux.",
		price: 16,
	},
	{
		name: "succulente",
		category: "plante grasse",
		id: "9vn",
		light: 2,
		water: 1,
		cover: succulent,
		isSpecialOffer: true,
		isBestSale: false,
		description: "Les succulentes sont simplement des plantes grasses. Si ce ne sont pas des cactus, vous les reconnaissez à leur feuillage épais et bombé, qui a parfois une consistance un peu cireuse.",
		price: 10,
	},

	{
		name: "menthe",
		category: "extérieur",
		id: "6uo",
		light: 2,
		water: 2,
		cover: mint,
		isBestSale: false,
		description: "La menthe est une plante herbacée vivace, originaire d'Europe, appartenant à la famille des Lamiacées (ou Labiées). Ses feuilles sont persistantes, et elle atteint une hauteur variant de quelques centimètres à près d'un mètre, selon les espèces.",
		price: 9,
	},
];
