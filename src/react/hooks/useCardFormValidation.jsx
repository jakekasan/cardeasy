import React, { useState } from "react";

export const useCardFormValidation = () => {
    let [ formData, setFormData ] = useState({});

    const [ recipient, setRecipient ] = useState({});
    const [ sender, setSender ] = useState({});
    const [ collaborators, setCollaborators ] = setState([]);
    const [ message, setMessage ] = setState("");
    const [ sendDate, setSendDate ] = setState(Date.now());

    const updateFormData = (newData) => {
        return setFormData({...formData, ...newData});
    }
    return {
        updateFormData,
        formData,
        setFormData
    }
}