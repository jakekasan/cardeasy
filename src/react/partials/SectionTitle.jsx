import React from "react";

export const SectionTitle = () => {
    const titleText = `Step ${stepNumber}: ${title}`;
    return (
        <h5>{ titleText }</h5>
    )
}