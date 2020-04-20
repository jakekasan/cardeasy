import React from "react";
import { MultiPage } from "../../partials/MultiPage.jsx";
import { SetCardOccasion } from "./setCardOccasion/SetCardOccasion.jsx";
import { SetCollaborators } from "./setCollaborators/SetCollaborators.jsx";
import { SetDate } from "./setDate/SetDate.jsx";
import { SetRecipientAndSender } from "./setRecipientAndSender/SetRecipientAndSender.jsx";
import { SetMessage } from "./setMessage/SetMessage.jsx";
import { useCardFormValidation } from "./../../hooks/useCardFormValidation.jsx";

export const NewCardForm = ({
    ...props
}) => {

    const { formData, updateFormData, onSubmit } = useCardFormValidation({
        defaultFormData: {
            collaborators: [],
            recipient: { name: "", email: ""},
            sender: { name: "", email: "" },
            message: "",
            cardOccasion: "",
            cardDesign: "",
            sendDate: new Date(),
        }
    });

    const updatedProps = { ...props, values: formData, onChange: updateFormData, onSubmit: onSubmit };

    return (
        <MultiPage { ...updatedProps }>
            <SetCardOccasion />
            <SetRecipientAndSender />
            <SetCollaborators />
            <SetMessage />
            <SetDate />
        </MultiPage>
    )
}