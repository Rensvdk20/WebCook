import Head from "next/head";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { GiChefToque } from "react-icons/gi";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";

export default function WebCook({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>WebCook</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="images/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/favicon/browserconfig.xml"
				/>
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<Navbar bg="light" expand="lg">
				<Container>
					<Link href="/" passHref>
						<Navbar.Brand>
							<GiChefToque className="logo" />
							<span>WebCook</span>
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link href="/recipes" passHref>
								<Nav.Link>Recipes</Nav.Link>
							</Link>
							<Link href="/manager" passHref>
								<Nav.Link>Recipe Manager</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Component {...pageProps} />
		</>
	);
}
