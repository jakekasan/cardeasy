import React from "react";
import { SectionTitle } from "./SectionTitle.jsx";

export const Page = ({children, title, stepNumber, styles = {}, ...props}) => {
    console.log("Rendering page");
    console.log(stepNumber);
    const { sectionClassname, titleClassname } = styles;
    return (
        <>
            <SectionTitle
                title={title}
                stepNumber={stepNumber}
                titleClassname={titleClassname}
            />
            <section className={ sectionClassname }>
            { children }
            </section>
        </>
    )
}