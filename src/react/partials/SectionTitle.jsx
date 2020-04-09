import React from "react";

export const SectionTitle = ({
    stepNumber,
    title
}) => {
    const titleText = `Step ${stepNumber}: ${title}`;
    return (
        <h5>{ titleText }</h5>
    )
}