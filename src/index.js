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
	html {
		font-size: 62.5%;
	}
	.material-icons.md-16 { font-size: 16px; }
`;

ReactDOM.render(
	<React.StrictMode>
		<App />
		<GlobalStyles />
	</React.StrictMode>,
	document.getElementById("root")
);
