import React from "react";
import { CollaboratorDetails } from "./collaboratorDetails.jsx";
import { CollaboratorList } from "./collaboratorList.jsx";

export const Collaborators = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <section>
            <h5>Step {stepNumber}: Recipient Details</h5>
            <CollaboratorDetails
                name = {{
                    elementName: "recipientName",
                    elementLabel: "Recipient's Name",
                    value: values.recipientName
                }}
                email = {{
                    elementName: "recipientEmail",
                    elementLabel: "Recipient's Email",
                    value: values.recipientEmail
                }}
                onChange = { onChange } />

            <CollaboratorDetails
                name = {{
                    elementName: "recipientName",
                    elementLabel: "Recipient's Name",
                    value: values.recipientName
                }}
                email = {{
                    elementName: "recipientEmail",
                    elementLabel: "Recipient's Email",
                    value: values.recipientEmail
                }}
                onChange = { onChange } />

            <CollaboratorList
                masterOnChange = {onChange}
                collaborators = { values.collaborators }/>

        </section>
    )
}