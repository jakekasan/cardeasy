import React from 'react';
import { TimeInput } from "./TimeInput.jsx";
import { DateInput } from "./DateInput.jsx";

export const DateInputTemplate = (props) => {

    const { dateInputs, timeInputs } = props;

    const dateMessage = "Enter the date that you'd like the card to be sent at:";
    const timeMessage = "And the time:"

    let liWrap = element => <li>{ element }</li>

    return (
        <div className = "SetDate">
            <p>{ dateMessage }</p>
            {/* <ul className = "inputList" >{ dateInputs.map(liWrap) }</ul> */}

            <DateInput dateInputs = { dateInputs} />
            <br/>
            <br/>
            
            <p>{ timeMessage }</p>
            {/* <ul className = "inputList" >{ timeInputs.map(liWrap) }</ul> */}
            
            <TimeInput timeInputs = { timeInputs } />
        </div>
    )
}