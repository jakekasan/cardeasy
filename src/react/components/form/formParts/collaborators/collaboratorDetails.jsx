import React from "react";

export const CollaboratorDetails = ({
    name,   // {element, label, value}
    email,  // {element, label, value}
    onChange,
    type
}) => {

    return (
        <li data-type = {type}>
            <input
                type = "text"
                name = { name.elementName }
                onChange = { onChange }
                value = { name.elementValue }
                />
            <label
                htmlFor= { name.elementName }
                >{ name.elementLabel }</label>
            <input
                type = "email"
                name = { email.elementName }
                onChange = { onChange }
                value = { name.elementValue }
                />
            <label
                htmlFor= { email.elementName }
                >{ email.elementLabel }</label>
        </li>
    )

    // return (
    //     <li className = {className} data-type = {type} key = {index}>
    //         <input
    //             type = "text"
    //             name = { name.elementName }
    //             onChange = { onChange }
    //             value = { name.elementValue }
    //             key = {index}
    //             />
    //         <label
    //             htmlFor= { name.elementName }
    //             key = {index}
    //             >{ name.elementLabel }</label>
    //         <input
    //             type = "email"
    //             name = { email.elementName }
    //             onChange = { onChange }
    //             value = { name.elementValue }
    //             key = {index}
    //             />
    //         <label
    //             htmlFor= { email.elementName }
    //             key = {index}
    //             >{ email.elementLabel }</label>
    //     </li>
    // )
}