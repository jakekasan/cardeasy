import React, { useReducer } from "react";

export const MultiPage = (
    props,
    {
        children
    }
) => {
    function pageReducer(pageNumber, action) {
        switch (action.type) {
            case "add":
                return Math.min(pageNumber + 1, children.length - 1)
            case "sub":
                return Math.max(pageNumber - 1, 0)
            default:
                throw new Error()
        }
    }

    const [ currentStep, dispatch ] = useReducer(pageReducer, 0);

    return (
        <section>
            { React.cloneElement(children[currentStep], props) }
            <button onClick = {() => dispatch({ type: "sub" })} disabled = { currentStep < 0}>Back</button>
            <button onClick = {() => dispatch({ type: "add" })} disabled = { currentStep === children.length - 1}>Next</button>
        </section>
    )
}