import Head from "next/head";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";

export default function WebCook({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>WebCook</title>
			</Head>
			<Navbar bg="light" expand="lg">
				<Container>
					<Link href="/" passHref>
						<Navbar.Brand>WebCook</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link href="/recipes" passHref>
								<Nav.Link>Recipes</Nav.Link>
							</Link>
							<Link href="/test" passHref>
								<Nav.Link>Test</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Component {...pageProps} />
		</>
	);
}
