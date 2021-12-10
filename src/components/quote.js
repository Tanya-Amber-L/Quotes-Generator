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

const Quote = () => {
	return (
		<StyledArticle>
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
			perferendis iste quisquam fugit ipsam molestias officiis reiciendis
			assumenda Possimus quo natus consequatur aspernatur beatae
			laboriosam, vel deleniti laudantium architecto nesciunt? Illo est
			similique ab, a quia aspernatur voluptates reiciendis."
		</StyledArticle>
	);
};

export default Quote;
