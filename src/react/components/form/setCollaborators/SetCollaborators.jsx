import React from "react";
import { CollaboratorList } from "./collaboratorList.jsx";

export const SetCollaborators = ({
    onChange,
    values,
    stepNumber
}) => {

    function collaboratorOnChange(event){
        let target = event.target;
        let parentNode = ((target.parentNode).parentNode);

        const collaborators = Array.from(parentNode.childNodes)
            .filter(child => child.getAttribute("data-type") === "collaborator")
            .map(child => {
                let collaboratorName = child.querySelector("input[name='collaboratorName'").value;
                
                let collaboratorEmail = child.querySelector("input[name='collaboratorEmail").value;

                return {
                    collaboratorName,
                    collaboratorEmail
                }
            })

        // event-ify data so it works with onChange

        collaborators = collaborators.filter((item, i, arr) => {
            return !(
                item.name === "" && item.email === "" && i < (arr.length - 1)
            )
        })

        let collaboratorsEvent = {
            target: {
                name: "collaborators",
                value: collaborators
            },
            preventDefault: () => {}
        }

        return onChange(collaboratorsEvent)
    }

    return (
        <section>
            <h5>Step {stepNumber}: Recipient Details</h5>
            <CollaboratorList
                values = { values }
                onChange = { onChange }
            />
            
        </section>
    )
}