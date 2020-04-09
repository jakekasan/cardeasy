import React from "react";
import { MultiPage } from "../../partials/MultiPage.jsx";
import { SetCardOccasion } from "./setCardOccasion/SetCardOccasion.jsx";
import { SetCollaborators } from "./setCollaborators/SetCollaborators.jsx";
import { SetDate } from "./setDate/SetDate.jsx";
import { SetRecipientAndSender } from "./setRecipientAndSender/SetRecipientAndSender.jsx";

export const NewCardForm = ({
    ...props
}) => {
    return (
        <MultiPage { ...props }>
            <SetCardOccasion />
            <SetRecipientAndSender />
            <SetCollaborators />
            <SetMessage />
            <SetDate />
        </MultiPage>
    )
}