import React, { Component } from "react";
import { Form } from "./form/main.jsx";
import { ChooseCardDesign } from "./form/formParts/chooseCardDesign.jsx";
import { ChooseCardOccasion } from "./form/formParts/chooseCardOccasion.jsx";
import { WriteCardMessage } from "./form/formParts/writeCardMessage.jsx";
import { RecipientDetails } from "./form/formParts/recipientDetails.jsx";
import { Collaborators } from "./form/formParts/collaborators/collaborators.jsx";

export const Test = (props) => {
    return (
        <Form>
            <ChooseCardOccasion />
            <ChooseCardDesign />
            <WriteCardMessage />
            <Collaborators />
        </Form>
    )
}