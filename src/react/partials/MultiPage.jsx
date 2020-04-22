import React, { useReducer } from "react";

export const MultiPage = (
    {
        children,
        onSubmit,
        ...props
    }
) => {
    const formSubmit = () => {
        console.log("formSubmit");
        onSubmit();
    }

    function pageReducer(pageNumber, action) {
        switch (action.type) {
            case "next":
                console.log("pageReducer next");
                console.log(pageNumber);
                return Math.min(pageNumber + 1, children.length - 1)
            case "back":
                console.log("pageReducer back");
                console.log(pageNumber);
                return Math.max(pageNumber - 1, 0)
            case "submit":
                console.log("pageReducer submit")
                formSubmit();
                return 0
            default:
                console.log("pageReducer default");
                throw new Error()
        }
    }

    const [ currentStep, dispatch ] = useReducer(pageReducer, 0);

    const renderBackButton = () => {
        const isDisabled = currentStep < 1;

        return (
            <button className="backButton buttonStyle" onClick = {() => dispatch({ type: "back" })} disabled = { isDisabled }>Back</button>
        )
    }

    const renderNextButton = () => {
        const isOnLastPart = currentStep === (children.length - 1);

        const buttonText = (isOnLastPart) ? "Submit" : "Next";

        const dispatchEventType = (isOnLastPart) ? "submit" : "next";

        const buttonOnClick = () => dispatch({type: dispatchEventType})

        return (
            <button className="nextButton buttonStyle" onClick = { buttonOnClick }>{ buttonText }</button>
        )
    }

    return (
        <main className = "formParent">
            { React.cloneElement(children[currentStep], { stepNumber:currentStep + 1, ...props }) }
            { renderBackButton() }
            { renderNextButton() }
        </main>
    )
}