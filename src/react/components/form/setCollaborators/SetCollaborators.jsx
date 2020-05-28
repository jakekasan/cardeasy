import React from "react";
import { CollaboratorList } from "./collaboratorList.jsx";
import { Page } from "./../../../partials/Page.jsx";

export const SetCollaborators = ({
    onChange,
    values,
    stepNumber
}) => {



    return (
        <Page
            stepNumber = { stepNumber }
            title = "Enter collaborator details"
        >
            <CollaboratorList
                values = { values }
                onChange = { onChange }
            />
            
        </Page>
    )
}