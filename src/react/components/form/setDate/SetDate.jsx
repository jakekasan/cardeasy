import React from "react";
import { LabeledInput } from "../../../partials/LabeledInput.jsx";
import { useDateForm } from "./../../../hooks/useDateForm.jsx";

export const SetDate = ({
    onChange,
    values
}) => {

    const { dateParts } = useDateForm(values.sendDate);

    const renderDatePart = (datePart, i) => {
        return (
            <LabeledInput
                type = "number"
                name = { datePart.name }
                value = { datePart.value }
                onChange = { datePart.onChange }
                label = { datePart.label }
                key = { i }
            />
        )
    }
    return (
        <section>
            {
                dateParts.map((datePart, i) => renderDatePart(datePart, i))
            }
        </section>    
    )
}