import { PrismaClient } from "@prisma/client";
import Head from "next/head";

import RecipeList from "../../components/recipes/recipeList";

export async function getServerSideProps() {
	const prisma = new PrismaClient();
	let allRecipes;

	try {
		allRecipes = JSON.parse(
			JSON.stringify(await prisma.recipes.findMany())
		);
	} catch (e) {
		console.log(e);
	}

	return { props: { allRecipes } };
}

export default function Recipes({ allRecipes }) {
	return (
		<>
			<Head>
				<title>WebCook | Recipes</title>
			</Head>
			<div className="recipe-page">
				<div className="container">
					<h1>Recipes</h1>
					<RecipeList allRecipes={allRecipes} />
				</div>
			</div>
		</>
	);
}
