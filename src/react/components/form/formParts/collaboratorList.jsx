import React from "react";
import { LabeledInput } from "./labeledInput.jsx";

function fixCollaborators(collabs) {
    let fixedCollaborators = collabs.filter(item => {
        return !(
            item.collaboratorName === "" &&
            item.collaboratorEmail === ""
            )
    })

    if (fixedCollaborators.length === 0) {
        return [{
            collaboratorName: "",
            collaboratorEmail: ""
        }]
    }

    let lastCollaborator = fixedCollaborators[fixedCollaborators.length - 1];

    if (lastCollaborator.collaboratorName !== "" || lastCollaborator.collaboratorEmail !== "") {
        return [...fixedCollaborators, {
            collaboratorName: "",
            collaboratorEmail: ""
        }]
    }

}

export const CollaboratorList = ({
    values,
    onChange
}) => {

    const fixedCollaborators = fixCollaborators(values.collaborators);

    function onCollabChangeFactory(index) {

        function onCollabChange(event) {
            
            const newValues = fixedCollaborators;

            newValues[index][event.target.name] = event.target.value

            return onChange({
                preventDefault: () => {},
                target: {
                    name: "collaborators",
                    value: newValues
                }
            })
        }

        return onCollabChange
    }

    

    return (
        <ul>
            {fixedCollaborators.map((collab, index) => {
                return (
                    <li key = { index }>
                        <LabeledInput
                            label = { "Collaborator's Name" }
                            name = { "collaboratorName" }
                            type = { "text" }
                            onChange = { onCollabChangeFactory(index) }
                            value = { collab.collaboratorName }
                            
                        />
                        <LabeledInput
                            label = { "Collaborator's Email" }
                            name = { "collaboratorEmail" }
                            type = { "email" }
                            onChange = { onCollabChangeFactory(index) }
                            value = { collab.collaboratorEmail }
                        />
                    </li>
                )
            })}
        </ul>
    )
}