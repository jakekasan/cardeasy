import { useState } from "react";

export const useFormTools = (initialState) => {
    const [ values, setValues ] = useState(initialState);

    function onChange(event) {
        event.preventDefault();

        let newValueName = event.target.name;
        let newValueValue = event.target.value;
        
        setValues({...values, [newValueName]: newValueValue });
    }

    function onSubmit(event) {
        event.preventDefault();

        console.log(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }
}