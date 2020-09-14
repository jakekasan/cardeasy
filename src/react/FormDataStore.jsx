import React, { useState } from "react";


const useFormDataStore = (DEFAULT_FORM_DATA = {}) => {
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

    const getFormPartData = (formPartName) => {
        console.log("getFormPartData", {formPartName});
        if (Object.keys(formData).includes(formPartName)) {
            return formData[formPartName]
        } else {
            formData[formPartName] = undefined;
        }
    }

    const setFormPartData = (formPartName, formPartData) => {
        console.log("setFormPartData", {formPartName, formPartData, formData});
        setFormData(currentData => {
            return {...currentData, [formPartName]: formPartData}
        });
    }

    const getAll = () => {
        console.log("getAll");
        return Object.create(formData)
    }

    return {
        get: getFormPartData,
        set: setFormPartData,
        getAll
    }
}

const StoreContext = React.createContext({
    get: () => console.log("get is not set"),
    set: () => console.log("set is not set")
});

export {
    useFormDataStore,
    StoreContext
}