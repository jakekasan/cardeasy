import React from "react";
import { LabeledInput } from "./LabeledInput.jsx";

const DEFAULT_NAME_LABEL = "Name"
const DEFAULT_EMAIL_LABEL = "Email"

export const PersonDetails = ({
    values,
    onChange,
    nameLabel = DEFAULT_NAME_LABEL,
    emailLabel = DEFAULT_EMAIL_LABEL
}) => {

    return (
        <div className = "PersonDetails">
            <LabeledInput
                name = "name"
                type = "text"
                value = { values.name }
                onChange = { onChange }
                label = { nameLabel }
            />
            <LabeledInput
                name = "email"
                type = "email"
                value = { values.email }
                onChange = { onChange }
                label = { emailLabel }
            />
        </div>
    )
}