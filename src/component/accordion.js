import React, { useState } from "react";




const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);
    //helper function
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };
    const renderedItems = items.map((item, index) => { //index to keep track of which items get clicked
        return (
            < React.Fragment key={item.title}>
                <div className="title active"
                     onClick={() => console.log(onTitleClick(index))}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
};

export default Accordion;