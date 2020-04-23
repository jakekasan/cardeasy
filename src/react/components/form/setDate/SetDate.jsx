import React from "react";
import { LabeledInput } from "../../../partials/LabeledInput.jsx";
import { useDateForm } from "./../../../hooks/useDateForm.jsx";
import { Page } from "./../../../partials/Page.jsx";
import { DateInputTemplate } from "./DateInputTemplate.jsx";

export const SetDate = ({
    onChange,
    values,
    stepNumber
}) => {

    const { dateParts } = useDateForm(values.sendDate);

    const renderDatePart = (datePart, i) => {
        return (
            <LabeledInput
                type = "text"
                name = { datePart.name }
                value = { datePart.value }
                onChange = { datePart.onChange }
                label = { datePart.label }
                key = { i }
            />
        )
    }

    const dateInputs = dateParts.filter(part => ["year", "month", "day"].includes(part.name)).map(part => renderDatePart(part, part.name));
    const timeInputs = dateParts.filter(part => ["hour", "minute"].includes(part.name)).map(part => renderDatePart(part, part.name));

    return (
        <Page
            stepNumber = {stepNumber}
            title = "When would you like this card to be delivered?"
        >
            
            <DateInputTemplate
                dateInputs={dateInputs}
                timeInputs={timeInputs}
            />

            
            
            {/* {
                dateParts.map((datePart, i) => renderDatePart(datePart, i))
            } */}
        </Page>    
    )
}