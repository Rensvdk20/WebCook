import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import RecipeSingle from "../../components/recipes/recipeSingle";

export default function recipe({ recipeData }) {
	const title = `WebCook | ${recipeData.name}`;

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="container">
				<RecipeSingle recipeData={recipeData} />
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const prisma = new PrismaClient();
	let allRecipes;

	try {
		allRecipes = JSON.parse(
			JSON.stringify(await prisma.recipes.findMany())
		);
	} catch (e) {
		console.log(e);
	}

	//Put all recipe ids in an array as string
	const paths = allRecipes.map((recipeData) => ({
		params: { id: recipeData.id.toString() },
	}));

	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const prisma = new PrismaClient();

	try {
		const recipeData = JSON.parse(
			JSON.stringify(
				await prisma.recipes.findUnique({
					where: {
						id: parseInt(params.id),
					},
				})
			)
		);

		return { props: { recipeData } };
	} catch (e) {
		console.log(e);
	}
}
