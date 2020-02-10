import React, { useEffect } from "react";
import { RecipientDetails } from "./recipientDetails.jsx";
import { SenderDetails } from "./senderDetails.jsx";
import { LabeledInput } from "./labeledInput.jsx";

export const RecipientAndSender = ({
    onChange,
    values,
    stepNumber
}) => {

    function onChangePrint(e) {
        console.log(e.target);
    }

    return (
        <section>
            <h5>Step {stepNumber}: Recipient and Sender</h5>
            <div>
                <LabeledInput
                    label = { "Recipient's Name" }
                    name = { "recipientName" }
                    type = { "text" }
                    onChange = { onChange }
                    value = { values.recipientName }
                />

                <LabeledInput
                    label = { "Recipeint's Email" }
                    name = { "recipientEmail" }
                    type = { "email" }
                    onChange = { onChange }
                    value = { values.recipientEmail }
                />

                <LabeledInput
                    label = { "Your Name:"}
                    name = { "senderName"}
                    type = { "text" }
                    onChange = { onChange }
                    value = { values.senderName }
                />

                <LabeledInput
                    label = { "Your Email:"}
                    name = { "senderEmail" }
                    type = { "email" }
                    onChange = { onChange }
                    value = { values.senderEmail }
                />
            </div>
        </section>
    )
}