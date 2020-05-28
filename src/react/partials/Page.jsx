import React, { useEffect } from "react";
import { SectionTitle } from "./SectionTitle.jsx";

export const Page = ({children, title, stepNumber, styles = {}, ...props}) => {
    
    useEffect(() => {
        console.log(`Page number ${stepNumber} rendering`);
        return () => {
            console.log(`Page number ${stepNumber} unmounting`)
        }
    })

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