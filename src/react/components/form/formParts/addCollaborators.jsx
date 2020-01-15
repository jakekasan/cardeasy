import React from "react";

export const AddCollaborators = ({
    values,
    onChange,
    stepNumber
}) => {
    return (
        <section>
            <h5>
                Step {stepNumber}: Add card collaborators
            </h5>
            <ul>
                <li><p>Collaborator</p></li>
            </ul>
        </section>
    )
}