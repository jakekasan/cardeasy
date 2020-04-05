import React, { useState } from "react";



export const useCardFormValidation = (DEFAULT_FORM_VALUES) => {
    let [ formData, setFormData ] = useState(DEFAULT_FORM_VALUES);

    const updateFormData = (newData) => {
        return setFormData({...formData, ...newData});
    }
    return {
        updateFormData,
        formData,
        setFormData
    }
}