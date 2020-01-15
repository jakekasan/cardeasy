import { CardDesign } from "./cardDesign.jsx";
import React from "react";

export const ChooseCardDesign = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <section>
            <h5>Step { stepNumber }: Pick a card design</h5>
            <ul>
                <CardDesign />
                <CardDesign />
                <CardDesign />
                <CardDesign />
            </ul>
        </section>
    )
}