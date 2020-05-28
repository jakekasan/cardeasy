import React, { useEffect } from "react";
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
            collaborators: [{ name: "", email: ""}],
            recipient: { name: "", email: ""},
            sender: { name: "", email: "" },
            message: "",
            cardOccasion: undefined,
            cardDesign: undefined,
            sendDate: new Date(),
        }
    });

    const updatedProps = { ...props, values: formData, onChange: updateFormData, onSubmit: onSubmit };

    useEffect(() => {
        console.log("NewCardForm rendering");
        return () => {
            console.log("NewCardForm unmounting")
        }
    })

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