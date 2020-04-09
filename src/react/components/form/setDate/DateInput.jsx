import React from "react";
import { useDateForm } from "../../../hooks/useDateForm";
import { LabeledInput } from "../../../partials/LabeledInput";

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