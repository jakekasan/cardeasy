import React, { useState } from "react";

const zeroDelimDateParts = ["month"]

function destructureDate(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
    }
}

function destructureDateLike(dateLike) {
    return {
        year: dateLike.year,
        month: dateLike.month,
        day: dateLike.day,
        hour: dateLike.hour,
        minute: dateLike.minute,
    }
}

export const useDateForm = (initialDate) => {

    const [ date, setDate ] = useState(initialDate);

    const datePartOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log("datePartOnChange:", name, value)
        value = (zeroDelimDateParts.includes(name)) ? value - 1 : value;
        let dateParts = {
            ...destructureDate(date),
            ...{
                [name]: value
            }
        };

        return setDate(new Date(
            ...Object.values(
                destructureDateLike(dateParts)
            )
        ));
    }

    const datePartNames = ["year","month","day","hour","minute"]

    const datePartValues = destructureDate(date);

    return {
        dateParts: datePartNames.map(name => {
            return {
                name: name,
                value: (zeroDelimDateParts.includes(name)) ? (datePartValues[name]) + 1 : datePartValues[name],
                label: name.toUpperCase(),
                onChange: datePartOnChange
            }
        })
    }
}