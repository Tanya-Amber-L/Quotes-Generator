import React from "react";
// import styled from "styled-components";
import Quote from "./quote";

// const Styled = styled.div`

// `;

const QuoteList = ({ list }) => {
	// list.forEach((quoteText) => {
	// 	return (
	// 		<div>
	// 			<Quote quoteText={quoteText} />
	// 		</div>
	// 	);
	// });
	return (
		<>
			{list.map((text) => {
				return <Quote quoteText={text} />;
			})}
		</>
	);
};

export default QuoteList;
