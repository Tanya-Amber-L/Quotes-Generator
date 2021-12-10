import React from "react";
import styled from "styled-components";
import AuthorInfo from "./components/authorInfo";
import RandomButton from "./components/button";
import Quote from "./components/quote";

const DivFlex = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const App = () => {
	return (
		<div>
			<DivFlex>
				<RandomButton />
			</DivFlex>
			<Quote />
			<AuthorInfo />
		</div>
	);
};

export default App;
