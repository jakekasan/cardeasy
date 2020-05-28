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
        <>
            <label
                htmlFor = { name }
            >{ label }</label>
            <input
                name = { name }
                type = { type }
                value = { value }
                onChange = { onChange }
                {...otherProps}
                />
        </>
    )
}