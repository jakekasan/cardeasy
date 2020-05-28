import React, { useRef } from "react";
import { LabeledInput } from "./../../../partials/LabeledInput.jsx";

export const CollaboratorList = ({
    values,
    onChange
}) => {
    const collaborators = values.collaborators
                                    .filter(item => !(item.name === "" && item.email === ""))
                                    .concat({ name: "", email: ""})

    const ulRef = useRef(null);

    function ulOnChange(e) {
        onChange({
            ...values,
            collaborators: Array.from(ulRef.current.children)
                .map(li => Array.from(li.querySelectorAll("input")))
                .map(inputs => Object.fromEntries(inputs.map(el => [el.name, el.value])))
        })
    }

    return (
        <ul onChange={ ulOnChange } ref = { ulRef }>
            {collaborators.map((collab, index) => {
                return (
                    <li key = { index }>
                        <LabeledInput
                            label = { "Collaborator's Name" }
                            name = { "name" }
                            type = { "text" }
                            defaultValue = { collab.name }
                        />
                        <LabeledInput
                            label = { "Collaborator's Email" }
                            name = { "email" }
                            type = { "email" }
                            defaultValue = { collab.email }
                        />
                    </li>
                )
            })}
        </ul>
    )
}