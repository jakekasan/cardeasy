import React from "react";
import LabeledInput from "./LabeledInput.jsx";

const DEFAULT_NAME_LABEL = "Name"
const DEFAULT_EMAIL_LABEL = "Email"

export const PersonDetails = ({
    values,
    onChange,
    nameLabel = DEFAULT_NAME_LABEL,
    emailLabel = DEFAULT_EMAIL_LABEL
}) => {

    function onDetailsChange(event) {
        const { event: { target: { name, value }}} = event;
        return onChange({...values, [name]: value})
    }

    return (
        <>
            <LabeledInput
                name = "name"
                type = "text"
                value = { values.name }
                onChange = { onDetailsChange }
                label = { nameLabel }
            />
            <LabeledInput
                name = "email"
                type = "email"
                value = { values.email }
                onChange = { onDetailsChange }
                label = { emailLabel }
            />
        </>
    )
}