export default function recipe({ recipeData }) {
	const recipe = recipeData.result;

	return <h1>{recipe.name}</h1>;
}

export async function getStaticPaths() {
	//Get all recipes
	const res = await fetch(new URL(`/api/recipes`, process.env.BASE_URL));
	const recipes = await res.json();

	//Put all recipe ids in an array as string
	const paths = recipes.results.map((recipeData) => ({
		params: { id: recipeData.id.toString() },
	}));

	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	try {
		//Fetch the recipe by id
		const res = await fetch(
			new URL(`/api/recipes?id=${params.id}`, process.env.BASE_URL),
			{
				method: "GET",
			}
		);

		const recipeData = await res.json();

		// Pass data to the page via props
		return { props: { recipeData } };
	} catch (err) {
		console.log(err);
	}
}
