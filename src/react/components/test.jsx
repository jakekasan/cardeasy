import React, { Component } from "react";
import { Form } from "./form/main.jsx";
import { ChooseCardDesign } from "./form/formParts/chooseCardDesign.jsx";
import { ChooseCardOccasion } from "./form/formParts/chooseCardOccasion.jsx";
import { WriteCardMessage } from "./form/formParts/writeCardMessage.jsx";
import { RecipientDetails } from "./form/formParts/recipientDetails.jsx";
import { Collaborators } from "./form/formParts/collaborators/collaborators.jsx";
import { RecipientAndSender } from "./form/formParts/recipientAndSender.jsx";
import { SendDate } from "./form/formParts/sendDate.jsx";

export const Test = (props) => {
    return (
        <Form>
            <ChooseCardOccasion />
            <ChooseCardDesign />
            <WriteCardMessage />
            <RecipientAndSender />
            <Collaborators />
            <SendDate />
        </Form>
    )
}