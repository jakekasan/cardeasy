import React from "react";

export const LabeledInput = ({
    label,
    name,
    type,
    onChange,
    value
}) => {
    return (
        <div>
            <label
                htmlFor = { name }
            >
                { label }
            </label>
            <input
                name = { name }
                type = { type }
                value = { value }
                onChange = { onChange }
                />
        </div>

    )
}