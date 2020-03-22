import React from "react";
import { LabeledInput } from "./labeledInput.jsx";

export const RecipientDetails = ({
    onChange,
    nameProps,
    emailProps,
}) => {

    
    return (
        <div>
            <LabeledInput
                label = { "Recipient's Name"}
                name = { "recipientName"}
                type = { "text" }
                onChange = { onChange }
                />
            <LabeledInput
                label = { "Recipient's Email"}
                name = { "recipientEmail"}
                type = { "email" }
                onChange = { onChange }
                />
        </div>
    )
}