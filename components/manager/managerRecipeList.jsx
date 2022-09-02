import Image from "next/image";

export default function ManagerRecipeList({ allRecipes }) {
	const recipes = allRecipes.results;

	const showRecipes = () => {
		if (!allRecipes.error) {
			return recipes.map((recipe) => (
				<div className="col-lg-12 col-sm-12 col-xs-12" key={recipe.id}>
					<div className="recipe">
						<div className="recipe-image">
							<Image
								src={
									process.env.NEXT_PUBLIC_IMAGE_URL +
									recipe.image
								}
								alt={recipe.title}
								layout="responsive"
								width={500}
								height={300}
								objectFit="cover"
							/>
						</div>
					</div>
				</div>
			));
		} else {
			return <div>No recipes found</div>;
		}
	};

	return (
		<div className="manager-recipe-list">
			<div className="row">{showRecipes()}</div>
		</div>
	);
}
