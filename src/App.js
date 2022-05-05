import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Route from "./component/Route";
import Header from "./component/Header";


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

//App navigation without using React-Router

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
