import React, { useState } from "react";

const getTomorrow = () => {
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(12);
    tomorrow.setMinutes(0);
    return tomorrow
}

const DEFAULT_FORM_DATA = {
    sendDatetime: getTomorrow(),
    collaborators: [],
    message: ""
}

const useFormDataStore = (defaultData = {}) => {
    defaultData = {...DEFAULT_FORM_DATA, ...defaultData};
    const [formData, setFormData] = useState(defaultData);

    const getFormPartData = (formPartName) => {
        console.log("getFormPartData", {formPartName});
        if (!Object.keys(formData).includes(formPartName)) {
            console.log(formPartName,"not in ", Object.keys(formData));
            formData[formPartName] = undefined;
        }
        console.log({formPartName, formData})
        return formData[formPartName]
    }

    const setFormPartData = (formPartName, formPartData) => {
        console.log("setFormPartData", {formPartName, formPartData});
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
    StoreContext,
    getTomorrow
}