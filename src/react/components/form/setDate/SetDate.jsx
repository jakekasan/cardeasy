import React from "react";
import { LabeledInput } from "../../../partials/LabeledInput.jsx";
import { useDateForm } from "./../../../hooks/useDateForm.jsx";
import { Page } from "./../../../partials/Page.jsx";

export const SetDate = ({
    onChange,
    values,
    stepNumber
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
        <Page
            stepNumber = {stepNumber}
            title = "When would you like this card to be delivered?"
        >
            {
                dateParts.map((datePart, i) => renderDatePart(datePart, i))
            }
        </Page>    
    )
}