import React from 'react';

export const DateInputTemplate = (props) => {

    const { dateInputs, timeInputs } = props;

    const dateMessage = "Enter the date that you'd like the card to be sent at:";
    const timeMessage = "and the time:"

    return (
        <>
        
        <p>{ dateMessage }</p>

        { dateInputs }

        <p>{ timeMessage }</p>

        { timeInputs }

        </>
    )
}