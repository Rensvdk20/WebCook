import Head from "next/head";
import prisma from "../../lib/prisma";
import RecipeManagerList from "../../components/manager/managerRecipeList";
import RecipeManagerOverview from "../../components/manager/managerOverview";

export async function getServerSideProps() {
	try {
		const allRecipes = JSON.parse(
			JSON.stringify(await prisma.recipes.findMany())
		);
		return { props: { allRecipes } };
	} catch (e) {
		console.log(e);
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
