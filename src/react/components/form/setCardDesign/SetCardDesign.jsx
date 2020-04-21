import React from "react";
import { SectionTitle } from "../../../partials/SectionTitle.jsx";
import { CardDesign } from "./cardDesign.jsx";

export const ChooseCardDesign = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <Page
            stepNumber = { stepNumber }
            title = { "Choose a card design!" }
        >
            {/* <SectionTitle
                stepNumber = { stepNumber }
                title = { "Choose a card design!" }
                /> */}
            <ul>
                <CardDesign />
                <CardDesign />
                <CardDesign />
                <CardDesign />
            </ul>
        </Page>
    )
}