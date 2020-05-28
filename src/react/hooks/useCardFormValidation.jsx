import React, { useState } from "react";

const DEFAULT_FORM_VALUES = {
    collaborators: [{ name: "", email: ""}],
    recipient: { name: "", email: ""},
    sender: { name: "", email: "" },
    message: "",
    cardOccasion: "",
    cardDesign: "",
    sendDate: new Date(),
}

export const useCardFormValidation = ({ defaultFormData = DEFAULT_FORM_VALUES}) => {
    let [ formData, setFormData ] = useState(defaultFormData);

    const updateFormData = (newData) => {
        return setFormData({...formData, ...newData});
    }

    const clearForm = () => {
        setFormData(DEFAULT_FORM_VALUES);
    }

    const onSubmit = (event) => {
        //event.preventDefault();

        console.log(event);

        console.log(formData);

        //clearForm();
    }

    return {
        updateFormData,
        formData,
        setFormData,
        onSubmit
    }
}