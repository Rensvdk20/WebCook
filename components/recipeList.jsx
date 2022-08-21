import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";

export default function RecipeList({ allRecipes }) {
	const showRecipes = () => {
		if (!allRecipes.error) {
			return allRecipes.results.map((recipe) => (
				<div className="col-lg-4 col-sm-6 col-xs-12" key={recipe.id}>
					<Link href={`/recipes/${recipe.id}`}>
						<div className="recipe">
							<div className="recipe-img">
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
								<div className="recipe-img-overlay"></div>
								<span className="recipe-img-description">
									{recipe.description.length > 300
										? `${recipe.description.substring(
												0,
												300
										  )}...`
										: recipe.description}
								</span>
							</div>
							<div className="recipe-info">
								<h4>{recipe.name}</h4>
								<p>
									<BsFillPersonFill className="userIcon" />
									{recipe.participants}
								</p>
								{/* <p>{recipe.description}</p> */}
							</div>
						</div>
					</Link>
				</div>
			));
		} else {
			console.log(allRecipes.error);
			return <div>No recipes found</div>;
		}
	};

	return (
		<div className="recipe-list">
			<div className="row">{showRecipes()}</div>
		</div>
	);
}
