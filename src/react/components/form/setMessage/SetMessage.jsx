import React from "react";
import { SectionTitle } from "../../../partials/SectionTitle.jsx";

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
        <section>
            <SectionTitle
                stepNumber = { stepNumber }
                title = { "Write a special message on the card!" }
                />
            <input type="text" name="message" value={ values.message } onChange={ messageOnChange }/>
        </section>
    )
}