import React, { Component, useState } from "react";

export const Form = (props) => {
    
    const {
        values,
        onChange,
        onSubmit
    } = useFormTools({
        cardType:"",
        recipientName:"",
        recipientEmail:"",
        senderName:"",
        senderEmail:"",
        senderMessage:"",
        contributors:[
            {
                contributorName: "",
                contributorEmail: ""
            }
        ]
    });

    

    return (
        <div>
            <h4>Form component part {count}</h4>

            <button onClick = {
                () => {
                    setCount(count > 1 ? count - 1 : count)
                    }
                }>Back</button>

            <button onClick = {
                () => {
                    setCount(count < props.formData.length - 1 ? count + 1 : count )
                    }
                }>Next</button>
        </div>
    )
}