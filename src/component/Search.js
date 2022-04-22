import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("programming");
	const [results, setResults] = useState([]);
	console.log("I RUN WITH EVERY RENDER");

	useEffect(() => {
		const search = async () => {
			const { data } = await axios("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: term,
				},
			});
			//cause a rerender and update the results array
			setResults(data.query.search);
		};

		search();
	}, [term]); //indicates that useEffects will rUN at the render

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`http://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
				<div className="content">
                    
					<div className="header">{results.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
					
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
