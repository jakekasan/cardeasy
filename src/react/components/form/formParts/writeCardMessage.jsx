import React from "react";

export const WriteCardMessage = ({
    values,
    onChange,
    stepNumber
}) => {
    return (
        <section>
            <h5>Step {stepNumber}: Write your message</h5>
        <textarea
            name = "cardMessage"
            onChange = { onChange }
            value = { values.cardMessage }
            />
        </section>
    )
}