import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
	font-size: 2.5rem;
	max-width: 65rem;
	margin: 7rem auto;
	padding: 0rem 5rem;
	border-left: 0.7rem solid #f7df94;
	border-right: 0.7rem solid transparent;
`;

const Quote = ({ quoteText }) => {
	return <StyledArticle>{quoteText}</StyledArticle>;
};

export default Quote;
