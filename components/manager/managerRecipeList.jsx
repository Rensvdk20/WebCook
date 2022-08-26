export default function ManagerRecipeList({ allRecipes }) {
	const recipes = allRecipes.results;

	const showRecipes = () => {
		if (!allRecipes.error) {
			return recipes.map((recipe) => (
				<div className="col-lg-12 col-sm-12 col-xs-12" key={recipe.id}>
					{recipe.name}
				</div>
			));
		} else {
			return <div>No recipes found</div>;
		}
	};

	return (
		<div className="manager-recipe-list">
			<div className="row">{/* showRecipes() */}</div>
		</div>
	);
}
