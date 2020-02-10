import React, { useState } from "react";

function getDefaultData() {
    const dateNow = new Date();
    const dateToRemind = dateNow.setDate(dateNow.getDate + 1);
    const dateToSend = dateNow.setDate(dateNow.getDate() + 2);

    return {
        dateToSendCard: dateToSend,
        reminder: {
            set: false,
            when: dateToRemind
        }
    }
}

function useSendDateHelpers(sendDateData = getDefaultData()) {
    const { dateToSendCard, reminder } = sendDateData;

    const [ dateToSend, setDateToSend ] = useState(dateToSendCard);

    function sendDateOnChange(event) {
        const {
            target: {
                name,
                value
            }
        } = event;

        const formDate = Date.parse(value);

        setDateToSend(formDate); // for now, later add validation
    }

    return {

    }
}

export const SendDate = ({
    onChange,
    values,
    stepNumber
}) => {
    return (
        <section>
            <h5>Step {stepNumber}: Choose when to send card!</h5>
            <div>
                {  }
                <input type="checkbox" name="" id=""/>
            </div>
        </section>
    )
}