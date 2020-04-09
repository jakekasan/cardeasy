import React, { useEffect } from "react";
import { LabeledInput } from "./labeledInput.jsx";
import { PersonDetails } from "../../../partials/PersonDetails.jsx";

export const RecipientAndSender = ({
    onChange,
    values
}) => {

    const { sender, recipient } = values;

    function onChangeFactory(keyName) {
        function wrappedOnChange(newData) {
            return onChange({...values, [keyName]: newData})
        }
        return wrappedOnChange
    }

    return (
        <section>
            <PersonDetails
                values = { sender }
                onChange = { onChangeFactory("sender") }
                nameLabel = { "Your name" }
                emailLabel = { "Your email" }
                />
            <PersonDetails
                values = { recipient }
                onChange = { onChangeFactory("recipient") }
                nameLabel = { "Recipient's name" }
                emailLabel = { "Recipient's email" }
                />
        </section>
    )
}