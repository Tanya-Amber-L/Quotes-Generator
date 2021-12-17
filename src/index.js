import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: "Raleway", sans-serif;
		font-weight: 500;
	}
	body {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	html {
		font-size: 62.5%;
	}
	.material-icons.md-16 { font-size: 16px;}
	.owner {
		padding: 2rem;
		margin: 1rem auto;
		color: #828282;
		& a {
			text-decoration: none;
			color: #828282;
		}
		& .name {
			font-weight: 700;
		}
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<App />
		<GlobalStyles />
	</React.StrictMode>,
	document.getElementById("root")
);
