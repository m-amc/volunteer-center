import React from "react";
import Helmet from "react-helmet";

const Metas = () => {
	return (
		<div>
			<Helmet>
				<title>Volunteer Center</title>
				<meta
					name="keywords"
					content="Web Development Bootcamp, Project 6, Volunteer Center, React application"
				/>
				<meta name="description" content="Volunteer Center" />
				<meta name="author" content="Ana Morales" />
				<meta property="og:title" content="Volunteer Center" />
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://m-amc.github.io/volunteer-center/"
				/>
				<meta
					property="og:image"
					content="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
				/>
				<meta property="og:site_name" content="Ana Morales" />
				<meta
					property="og:description"
					content="By Ana Morales, Web Developer"
				/>
				<meta name="twitter:card" content="summary" />
				<meta
					name="twitter:url"
					content="https://m-amc.github.io/volunteer-center/"
				/>
				<meta name="twitter:title" content="Volunteer Center" />
				<meta
					name="twitter:description"
					content="&copy; Ana Morales, Web Developer"
				/>
				<meta name="twitter:creator" content="@class_anathedev" />
			</Helmet>
		</div>
	);
};

export default Metas;
