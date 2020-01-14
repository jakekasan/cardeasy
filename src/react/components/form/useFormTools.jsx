import { useState } from "react";

export const useFormTools = (initialState) => {
    const [ values, setValues ] = useState(initialState);

    function onChange(event) {
        event.preventDefault();

        setValues({...values, [event.target.name]: event.target.value});
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