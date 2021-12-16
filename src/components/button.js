import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
	padding: 0.5rem;
	margin: 1rem 3rem;
	transition: 0.3s;
	display: flex;
	align-items: center;

	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
	& span {
		padding-left: 0.5rem;
	}
`;

const RandomButton = () => {
	const [quote, setQuote] = useState("");
	const getRandomQuote = () => {
		fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
			.then((resp) => resp.json())
			.then((data) => setQuote(data.data[0].quoteText));
	};
	return (
		<StyledButton onClick={getRandomQuote}>
			random <span className="material-icons md-16">loop</span>
			<p>{quote}</p>
		</StyledButton>
	);
};

export default RandomButton;
