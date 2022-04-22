import React, { useState } from "react";

const Accordion = ({ items }) => {
	//using useState is allowing us to set activeIndex as a state object with in a functional component. setActiveIndex is a function to change the state of activeIndex, null is the inital value of state
	const [activeIndex, setActiveIndex] = useState(null); //array destructuring
	//helper function
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};
	const renderedItems = items.map((item, index) => {
		//index to keep track of which items get clicked

		const active = index === activeIndex ? "active" : "";
		return (
			//used Fragment so we can do multiple div in a return
			<React.Fragment key={item.title}>
				
				{/*every element in ajsx list needs a key*/}
				<div
					className={`title ${active}`}
					onClick={() => console.log(onTitleClick(index))}
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return (
		<div className="ui styled accordion">
			<h1> {renderedItems} </h1>
		</div>
	);
};

export default Accordion;
