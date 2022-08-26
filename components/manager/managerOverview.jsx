export default function ManagerOverview({ allRecipes }) {
	const recipes = allRecipes.results;

	const getRecipesByLastMonths = (months) => {
		return recipes.filter(
			(recipe) =>
				new Date(recipe.created_at) >
				new Date().setMonth(new Date().getMonth() - months)
		);
	};

	return (
		<div className="manager-overview">
			<div className="row">
				<div className="col-lg-3">
					<div className="manager-overview-block">
						<p>Total recipes</p>
						<span>{allRecipes.results.length}</span>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="manager-overview-block">
						<p>Recipes from the last 6 months</p>
						<span>{getRecipesByLastMonths(6).length}</span>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="manager-overview-block">
						<p>Recipes from the last month</p>
						<span>{getRecipesByLastMonths(1).length}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
