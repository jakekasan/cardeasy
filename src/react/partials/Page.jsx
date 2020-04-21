import React from "react";
import { SectionTitle } from "./SectionTitle.jsx";

export const Page = ({children, title, stepNumber, ...props}) => {
    console.log("Rendering page");
    console.log(stepNumber);
    return (
        <>
            <SectionTitle
                title={title}
                stepNumber={stepNumber}
            />
            <section>
            { children }
            </section>
        </>
    )
}