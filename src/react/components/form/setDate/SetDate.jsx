import React from "react";
import { useDateForm } from "../../hooks/useDateForm";
import { LabeledInput } from "../../../partials/LabeledInput";

export default SetDate = ({
    onChange,
    values
}) => {

    const { dateParts } = useDateForm(values.sendDate);

    const renderDatePart = (datePart) => {
        return (
            <LabeledInput
                type = "number"
                name = { datePart.name }
                value = { datePart.value }
                onChange = { datePart.onChange }
                label = { datePart.label }
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