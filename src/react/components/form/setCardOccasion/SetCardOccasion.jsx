import React from "react";
import { CardOccasion } from "./CardOccasion.jsx";
import { Page } from "./../../../partials/Page.jsx";

export const SetCardOccasion = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <Page
            title = "Choose an occasion for your card"
            stepNumber = { stepNumber }
        >
            <ul>
                <CardOccasion />
                <CardOccasion />
                <CardOccasion />
                <CardOccasion />
            </ul>
        </Page>
    )
}