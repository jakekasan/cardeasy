import React from "react";

export const LabeledInput = ({
    label,
    name,
    type,
    onChange,
    value,
    ...otherProps
}) => {
    return (
        <div className = { "LabeledInput" }>
            <input
                name = { name }
                type = { type }
                value = { value }
                onChange = { onChange }
                placeholder = { (type === "email") ? "vader@empire.imp" : "Darth Vader" }
                {...otherProps}
                />
            <label
                htmlFor = { name }
            >{ label }</label>
        </div>
    )
}