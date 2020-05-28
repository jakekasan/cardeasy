import React, { useEffect, useState } from "react";
import { PersonDetails } from "./../../../partials/PersonDetails.jsx";
import { Page } from "./../../../partials/Page.jsx";

export const SetRecipientAndSender = ({
    onChange,
    values,
    stepNumber
}) => {

    const { sender, recipient } = values;

    return (
        <Page
            title = { "Tell us about you and who we're sending the card to!"}
            stepNumber = { stepNumber }
        >
            <PersonDetails
                values = { sender }
                onChange = { (e) => onChange({...values, sender: {...sender, [e.target.name]: e.target.value }}) }
                nameLabel = { "Your name" }
                emailLabel = { "Your email" }
                />
            <PersonDetails
                values = { recipient }
                onChange = { (e) => onChange({...values, recipient: {...recipient, [e.target.name]: e.target.value }}) }
                nameLabel = { "Recipient's name" }
                emailLabel = { "Recipient's email" }
                />
        </Page>
    )
}