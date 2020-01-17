import React from "react";
import { CollaboratorDetails } from "./collaboratorDetails.jsx";

export const CollaboratorList = ({
    formOnChange,
    collaborators
}) => {

    function onChange(event) {
        
        const index = event.target.parentNode.key;
        console.log(index);
    }
    return (
        <ul>
            { collaborators.map((collaborator, i) => {
                return <CollaboratorDetails
                    key = {i}
                    name = {{
                        elementName: "collaboratorName",
                        elementLabel: "Collaborator's Name",
                        elementValue: collaborator.name
                    }}
                    email = {{
                        elementName: "collaboratorEmail",
                        elementLabel: "Collaborator's Email",
                        elementValue: collaborator.email
                    }}
                    onChange = { formOnChange }
                    />
            }) }
        </ul>
    )
}