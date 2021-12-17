import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AuthorInfo from "./components/authorInfo";
import RandomButton from "./components/button";
import LoadingAnimation from "./components/loadingAnimation";
import Quote from "./components/quote";
import QuoteList from "./components/quotesList";
import { fetchRandomQuote, fetchQuotesFromAuthor } from "./components/api";

const DivFlex = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const App = () => {
	const [text, setText] = useState("");
	const [author, setAuthor] = useState("");
	const [genre, setGenre] = useState("");
	const [quoteList, setQuoteList] = useState([]);
	const [isAuthorList, setIsAuthorList] = useState(false);

	useEffect(() => {
		console.clear();
		RandomQuote();
	}, []);

	const RandomQuote = async () => {
		setIsAuthorList(false);
		const quote = await fetchRandomQuote();
		console.log(quote);
		setText(quote.quoteText);
		setAuthor(quote.quoteAuthor);
		setGenre(quote.quoteGenre);
		setQuoteList([]);
	};

	const QuotesFromAuthor = async (author) => {
		setIsAuthorList(true);
		const quoteFromAuthor = await fetchQuotesFromAuthor(author);
		setQuoteList(quoteFromAuthor);
	};

	return (
		<div>
			{text === "" ? (
				<LoadingAnimation />
			) : (
				[
					!isAuthorList ? (
						<div>
							<DivFlex>
								<RandomButton clickFunc={RandomQuote} />
							</DivFlex>
							<Quote quoteText={text} />
							<AuthorInfo
								quoteAuthor={author}
								quoteGenre={genre}
								clickFunc={() => QuotesFromAuthor(author)}
							/>
						</div>
					) : (
						<div>
							<DivFlex>
								<RandomButton clickFunc={RandomQuote} />
							</DivFlex>
							<QuoteList list={quoteList} author={author} />
						</div>
					),
				]
			)}
		</div>
	);
};

export default App;
