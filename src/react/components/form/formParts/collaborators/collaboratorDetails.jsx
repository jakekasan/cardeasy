import React from "react";

export const CollaboratorDetails = ({
    name,   // {element, label, value}
    email,  // {element, label, value}
    onChange
}) => {
    return (
        <li>
            <input type = "text" name = { name.elementName } onChange = { onChange } value = { name.elementValue }/>
            <label htmlFor= { name.elementLabel } ></label>
            <input type = "email" name = { email.elementName } onChange = { onChange } value = { name.elementValue }/>
            <label htmlFor= { email.elementName } >{ email.elementLabel }</label>
        </li>
    )
}