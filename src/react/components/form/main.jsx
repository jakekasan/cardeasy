import React, { useState } from "react";
import { useFormTools } from "./useFormTools.jsx";

export const Form = (props) => {

    const [ step, setStep ] = useState(0);
    
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

    function onClickBack(event) {
        console.log("onClickBack, step:", step);
        if (step > 0) {
            setStep(step - 1);
        }
    }

    function onClickNext(event) {
        console.log("onClickNext, step:", step);
        if (step < props.children.length - 1) {
            setStep(step + 1);
        }
    }

    let SelectedChild = props.children[step];

    // { props.children[step]({values, onChange, onSubmit, stepNumber: step}) }

    let stepNumber = step + 1;

    const newElement = React.cloneElement(SelectedChild, {
        values,
        onChange,
        onSubmit,
        stepNumber
    })

    return (
        <div>
            { newElement }
            <button onClick = { onClickBack }>Back</button>
            <button onClick = { onClickNext }>Next</button>
        </div>
    )
}