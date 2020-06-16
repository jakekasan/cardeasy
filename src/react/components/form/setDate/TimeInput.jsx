import React from "react";

export const TimeInput = ({
    timeInputs
}) => {

    const [hour] = timeInputs.filter(item => item.name === "hour");
    const [minute] = timeInputs.filter(item => item.name === "minute")

    return (
        <div className = "inlineInputs">
            <input
                className = "UnLabeledInput"
                type = "text" {...hour}
                />
                { ":" }
            <input
                className = "UnLabeledInput"
                type = "text" {...minute}
                />
        </div>
    )
}