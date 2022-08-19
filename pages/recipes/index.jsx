import RecipeList from "../../components/recipeList";

export async function getServerSideProps() {
	try {
		// Fetch data from external API
		const res = await fetch(new URL("/api/recipes", process.env.BASE_URL), {
			method: "GET",
		});

		const allRecipes = await res.json();

		// Pass data to the page via props
		return { props: { allRecipes } };
	} catch (err) {
		console.log(err);
	}
}

export default function Recipes({ allRecipes }) {
	return (
		<div className="container">
			<h1>Recipes</h1>
			<RecipeList allRecipes={allRecipes} />
		</div>
	);
}
