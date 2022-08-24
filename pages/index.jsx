import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>WebCook | Homepage</title>
				<meta
					name="description"
					content="WebCook is a web application that allows you to create and share recipes."
				/>
			</Head>
			<header></header>
			<div>
				<Image
					priority
					src="/images/svg/homepage_gradient.svg"
					layout="responsive"
					width={1920}
					height={460.72}
					objectFit="cover"
					alt="homepage gradient"
				/>
			</div>
			<footer></footer>
		</>
	);
}
