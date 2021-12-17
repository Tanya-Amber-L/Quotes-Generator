export const fetchRandomQuote = async () => {
	const request = await fetch(
		"https://quote-garden.herokuapp.com/api/v3/quotes/random"
	);
	const resp = await request.json();
	return resp.data[0];
};

export const fetchQuotesFromAuthor = async (author) => {
	const request = await fetch(
		`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
	);
	const resp = await request.json();
	const quoteList = await resp.data.map((quoteFromAuthor) => {
		const authorQuoteText = quoteFromAuthor.quoteText;
		return authorQuoteText;
	});
	return quoteList;
};
