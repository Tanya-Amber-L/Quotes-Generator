import React from "react";
import styled from "styled-components";
import Quote from "./quote";

const Heading = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	max-width: 65rem;
	margin: 2rem auto;
`;

const QuoteList = ({ list, author }) => {
	return (
		<>
			<Heading> {author}</Heading>
			{list.map((text, index) => {
				return <Quote key={index} quoteText={text} />;
			})}
		</>
	);
};

export default QuoteList;
