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

export const useDateForm = () => {

    const [ date, setDate ] = setState(new Date());

    const datePartOnChange = (event) => {
        let dateParts = {
            ...destructureDate(date),
            ...{[event.target.name]: event.target.value}
        };

        return setDate(new Date(
            Object.values(
                destructureDateLike(dateParts)
            )
        ));
    }

    return {
        datePartOnChange
    }
}