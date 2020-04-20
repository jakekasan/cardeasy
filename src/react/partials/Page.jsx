import React from "react";

export const Page = ({children:[content], title, partNumber, ...props}) => {
    console.log("Rendering page");
    console.log(partNumber);
    return (
        <>
            <h5>Part {partNumber}: { title }</h5>
            { React.cloneElement(content, props) }
        </>
    )
}