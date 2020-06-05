import React from "react";
import { SectionTitle } from "../../../partials/SectionTitle.jsx";
import { Page } from "./../../../partials/Page.jsx";

export const SetMessage = ({
    stepNumber,
    values,
    onChange
}) => {
    function messageOnChange(event){
        const { target: { name, value }} = event;

        return onChange({ [name]: value })
    }
    return (
        <Page
            stepNumber = { stepNumber }
            title = { "Write a special message on the card!" }
        >
            <textarea
                type="text"
                name="message"
                value={ values.message }
                placeholder={ "Say something!" }
                onChange={ messageOnChange }/>
        </Page>
    )
}