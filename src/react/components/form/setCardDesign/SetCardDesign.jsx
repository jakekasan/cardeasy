import React from "react";
import { SectionTitle } from "../../../partials/SectionTitle.jsx";
import { CardDesign } from "./cardDesign.jsx";
import { Page } from "./../../../partials/Page.jsx";
import { Paginator } from "../../../partials/Paginator.jsx";

export const SetCardDesign = ({
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
            <Paginator />
        </Page>
    )
}