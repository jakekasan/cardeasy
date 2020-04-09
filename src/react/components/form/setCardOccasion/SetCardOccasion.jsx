import React from "react";
import { CardOccasion } from "./CardOccasion.jsx";

export const SetCardOccasion = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <section>
            <h5>Step { stepNumber }: Choose an occasion for your card</h5>
            <ul>
                <CardOccasion />
                <CardOccasion />
                <CardOccasion />
                <CardOccasion />
            </ul>
        </section>
    )
}