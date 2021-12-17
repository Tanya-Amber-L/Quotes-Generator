import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 58rem;
	margin: auto;
	padding: 3rem 2rem;
	transition: 0.3s;
	cursor: pointer;
	&:hover {
		background-color: #333333;
		color: white;
	}
	& .author-name {
		font-weight: 700;
		font-size: 1.7rem;
		padding-bottom: 0.5rem;
	}
`;

const AuthorInfo = ({ quoteAuthor, quoteGenre, clickFunc }) => {
	return (
		<StyledDiv onClick={() => clickFunc(quoteAuthor)}>
			<div>
				<p className="author-name">{quoteAuthor}</p>
				<p className="category">{quoteGenre}</p>
			</div>
			<span className="material-icons">trending_flat</span>
		</StyledDiv>
	);
};

export default AuthorInfo;
