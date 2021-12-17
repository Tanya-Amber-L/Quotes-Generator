import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AuthorInfo from "./components/authorInfo";
import RandomButton from "./components/button";
import LoadingAnimation from "./components/loadingAnimation";
import Quote from "./components/quote";
import QuoteList from "./components/quotesList";

const DivFlex = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const App = () => {
	const [text, setText] = useState("");
	const [author, setAuthor] = useState("");
	const [genre, setGenre] = useState("");
	const [quoteList, setQuoteList] = useState([]);
	const [authorList, setAuthorList] = useState(false);

	useEffect(() => {
		fetchRandomQuote();
	}, []);

	const fetchRandomQuote = () => {
		setAuthorList(false);
		fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
			.then((resp) => resp.json())
			.then((json) => {
				const { quoteAuthor, quoteGenre, quoteText, _id } =
					json.data[0];

				const quote = {
					author: quoteAuthor,
					genre: quoteGenre,
					text: quoteText,
					id: _id,
				};
				setText(quote.text);
				setAuthor(quote.author);
				setGenre(quote.genre);
				setQuoteList([]);
			});
	};

	const fetchQuotesFromAuthor = (author) => {
		setAuthorList(true);
		fetch(
			`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
		)
			.then((resp) => resp.json())
			.then((json) => {
				json.data.forEach((quoteFromAuthor) => {
					const authorQuoteText = quoteFromAuthor.quoteText;
					quoteList.push(authorQuoteText);
				});
			})
			.then(() => {
				setQuoteList(quoteList);
				console.log(quoteList, authorList);
			});
	};

	return (
		<div>
			{/* {(() => {
				if (authorList) {
					// if it's a list of quotes from 1 author
					// quoteList === [] ? (
					// 	<LoadingAnimation />
					// ) : (
					<div>
						<DivFlex>
							<RandomButton clickFunc={fetchRandomQuote} />
						</DivFlex>
						<QuoteList />
					</div>;
					// );
				} else { */}
			{text === "" ? (
				<LoadingAnimation />
			) : (
				<div>
					<DivFlex>
						<RandomButton clickFunc={fetchRandomQuote} />
					</DivFlex>
					<Quote quoteText={text} />
					<AuthorInfo
						quoteAuthor={author}
						quoteGenre={genre}
						clickFunc={fetchQuotesFromAuthor}
					/>
					<QuoteList list={quoteList} />
				</div>
			)}
			{/* }
			})()} */}
		</div>
	);
};

export default App;
