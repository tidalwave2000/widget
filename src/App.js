import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";

const items = [
	{
		title: "What is React",
		content: "react is a front end javascript framework",
	},
	{
		title: "Why use React?",
		content: "React is a favorite JS library among engineers",
	},
	{
		title: "How do you use React?",
		content: "You use React by creating components",
	},
];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: " green",
	},
	{
		label: "A Shade of Blue",
		value: "blue",
	},
];
const App = () => {
	return (
		<div>
			<Translate />
		</div>
	);
};

export default App;
