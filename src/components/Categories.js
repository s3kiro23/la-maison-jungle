import "../styles/Categories.css";

function Categories({ categories, activeCategory, setActiveCategory }) {
	return (
		<div className="lmj-categories">
			<label htmlFor="categories-select">Catégories : </label>
			<select
				className="lmj-categories-select"
				name="categories"
				id="categories-select"
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
			>
				<option value="" disabled>
					---
				</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory("")}>Réinitialiser</button>
		</div>
	);
}

export default Categories;
