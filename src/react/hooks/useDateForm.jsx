import React, { useState } from "react";

function destructureDate(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHour(),
        minute: date.getMinute(),
        second: date.getSecond(),
        milisecond: date.getMilisecond()
    }
}

function destructureDateLike(dateLike) {
    return {
        year: dateLike.year,
        month: dateLike.month,
        day: dateLike.day,
        hour: dateLike.hour,
        minute: dateLike.minute,
        second: dateLike.second,
        milisecond: dateLike.milisecond
    }
}

export const useDateForm = (initialDate) => {

    const [ date, setDate ] = setState(initialDate);

    const datePartOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value.toInt();
        value = (zeroDelimDateParts.includes(value)) ? value - 1 : value;
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
        dateParts = datePartNames.map(name => {
            return {
                name: name,
                value: datePartValues[name],
                label: name.toUpperCase(),
                onChange: datePartOnChange
            }
        })
    }
}