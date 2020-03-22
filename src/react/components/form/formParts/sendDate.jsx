import React, { useState } from "react";

function getDefaultData() {
    const dateNow = new Date();
    const dateToRemind = dateNow.setDate(dateNow.getDate() + 1);
    const dateToSend = dateNow.setDate(dateNow.getDate() + 2);

    return {
        dateToSend: dateToSend,
        reminder: {
            set: false,
            when: dateToRemind
        }
    }
}

function useSendDateHelpers(sendDateData = getDefaultData()) {
    const { dateToSend: dateToSendCard, reminder } = sendDateData;

    const [ dateToSend, setDateToSend ] = useState(dateToSendCard);

    function sendDateOnChange(event) {
        console.log("sendDateOnChange");
        const { target } = event;

        const { value } = target;

        console.log(target);

        console.log("Raw date is:", value);

        const formDate = new Date(value);

        console.log("Parsed date is:", formDate.toDateString());

        setDateToSend(formDate); // for now, later add validation
    }

    console.log("useSendDateHelpers");
    console.log({dateToSend});

    return {
        sendDateOnChange,
        dateToSend
    }
}

export const SendDate = ({
    onChange,
    values,
    stepNumber
}) => {
    const { sendDateOnChange, dateToSend } = useSendDateHelpers();

    console.log("SendDate render");
    console.log(typeof dateToSend);

    const date = new Date(dateToSend);

    const year = date.getFullYear();
    const month = ('0' + date.getMonth()).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const dateString = `${year}-${month}-${day}`;

    console.log("Parsed string date = ", dateString);
    return (
        <section>
            <h5>Step {stepNumber}: Choose when to send card!</h5>
            <div>
                {  }
                <input
                    type="date"
                    name="dateToSendCard"
                    onChange = { sendDateOnChange }
                    //value = { dateString }
                    value = { dateString }
                    />
            </div>
        </section>
    )
}