import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("programming");
	const [results, setResults] = useState([]);
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	//introduce another useEffect to avoid a bug later down the line that will render multiple time risking a infinite loop
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);
		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: debouncedTerm,
				},
			});
			//cause a rerender and update the results array
			setResults(data.query.search);
		};
		if (debouncedTerm) {
			search();
		}
	}, [debouncedTerm]);
	//if there is a term and a results then do a search

	//if there wasn't a result or term clearout the search box and delay the search of the next search keyword

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={`http://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{results.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label> Enter Search Term </label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
