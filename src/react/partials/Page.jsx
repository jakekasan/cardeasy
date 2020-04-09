import React from "react";

export const Page = ({content, title, partNumber, ...props}) => {
    return (
        <>
            <h5>Part {partNumber}: { title }</h5>
            { React.cloneElement(content, props) }
        </>
    )
}