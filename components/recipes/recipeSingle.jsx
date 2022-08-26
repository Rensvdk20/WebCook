import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";

export default function recipe({ recipeData }) {
	const recipe = recipeData.result;

	return (
		<div className="recipe-single">
			<div className="recipe">
				<div className="recipe-block recipe-block-top row">
					<div className="col-lg-6 col-md-6 col-xs-12">
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
					<div className="col-lg-6 col-md-6 col-xs-12">
						<div className="recipe-info">
							{
								<>
									<h4>{recipe.name}</h4>
									<p>{recipe.description}</p>
									<p>
										<BsFillPersonFill className="userIcon" />
										{recipe.participants}
									</p>
								</>
							}
						</div>
					</div>
				</div>
				<div className="recipe-block recipe-block-mid row">
					<div className="col-lg-4 col-md-6 col-xs-12">
						<h4>Ingredients</h4>
						<p>{recipe.ingredients}</p>
					</div>
					<div className="col-lg-8 col-md-6 col-xs-12">
						<h4>Instructions</h4>
						<p>{recipe.instructions}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
