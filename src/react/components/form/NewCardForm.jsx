import React from "react";
import { MultiPage } from "../../partials/MultiPage.jsx";
import { SetCardOccasion } from "./setCardOccasion/SetCardOccasion.jsx";
import { SetCollaborators } from "./setCollaborators/SetCollaborators.jsx";
import { SetDate } from "./setDate/SetDate.jsx";

export const NewCardForm = ({

}) => {
    return (
        <MultiPage>
            <SetCardOccasion />
            <SetCollaborators />
            <SetDate />
        </MultiPage>
    )
}