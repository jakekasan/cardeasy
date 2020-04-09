import React from "react";
import { SectionTitle } from "../../../partials/SectionTitle.jsx";
import { CardDesign } from "./cardDesign.jsx";

export const ChooseCardDesign = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <section>
            <SectionTitle
                stepNumber = { stepNumber }
                title = { "Choose a card design!" }
                />
            <ul>
                <CardDesign />
                <CardDesign />
                <CardDesign />
                <CardDesign />
            </ul>
        </section>
    )
}