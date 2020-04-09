import React from "react";
import { useDateForm } from "../../../hooks/useDateForm.jsx";
import { LabeledInput } from "../../../partials/LabeledInput.jsx";

export default DateInput = () => {

    const { dateParts } = useDateForm();

    const renderDatePart = (datePart) => {
        return (
            <LabeledInput
                type = "number"
                { ...datePart }
            />
        )
    }
    return (
        <section>
            {
                dateParts.map(datePart => renderDatePart(datePart))
            }
        </section>    
    )
}