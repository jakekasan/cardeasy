import React, { useRef } from "react";
import { LabeledInput } from "./../../../partials/LabeledInput.jsx";
import { PersonDetails } from "../../../partials/PersonDetails.jsx";

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
        <ul onChange = { ulOnChange } ref = { ulRef } className = { "CollaboratorList" }>
            {collaborators.map((collab, index) => {
                return (
                    <li key = { index } className>
                        <PersonDetails values = { collab } onChange = { null }/>
                    </li>
                )
            })}
        </ul>
    )
}