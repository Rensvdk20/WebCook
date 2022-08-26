import Head from "next/head";
import RecipeManagerList from "../../components/manager/managerRecipeList";
import RecipeManagerOverview from "../../components/manager/managerOverview";

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

export default function RecipeManager({ allRecipes }) {
	return (
		<>
			<Head>
				<title>WebCook | Recipe Manager</title>
			</Head>
			<div className="manager-page">
				<div className="container">
					<h1>Recipe Manager</h1>
					<RecipeManagerOverview allRecipes={allRecipes} />
					<RecipeManagerList allRecipes={allRecipes} />
				</div>
			</div>
		</>
	);
}
