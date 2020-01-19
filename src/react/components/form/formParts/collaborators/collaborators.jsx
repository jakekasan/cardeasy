import React from "react";
import { CollaboratorDetails } from "./collaboratorDetails.jsx";
import { CollaboratorList } from "./collaboratorList.jsx";

export const Collaborators = ({
    onChange,
    values,
    stepNumber
}) => {

    function collaboratorOnChange(event){
        let target = event.target;
        let parentNode = ((target.parentNode).parentNode);

        parentNode.children.map(child => {
            console.log()
        })
    }

    const collaborators = values.collaborators.map((collaborator, i) => {
        return <CollaboratorDetails
            name = {{
                elementName: "collaboratorName",
                elementLabel: "Collaborator's Name",
                elementValue: collaborator.name
            }}
            email = {{
                elementName: "collaboratorEmail",
                elementLabel: "Collaborator's Email",
                elementValue: collaborator.email
            }}
            onChange = { collaboratorOnChange }
            type = "collaborator"
            key = { i + 2 }
        />
    })

    return (
        <section>
            <h5>Step {stepNumber}: Recipient Details</h5>
            <ul>
                <CollaboratorDetails
                    name = {{
                        elementName: "recipientName",
                        elementLabel: "Recipient's Name",
                        value: values.recipientName
                    }}
                    email = {{
                        elementName: "recipientEmail",
                        elementLabel: "Recipient's Email",
                        value: values.recipientEmail
                    }}
                    onChange = { onChange }
                    key = {0}/>

                <CollaboratorDetails
                    name = {{
                        elementName: "senderName",
                        elementLabel: "Sender's Name",
                        value: values.senderName
                    }}
                    email = {{
                        elementName: "senderEmail",
                        elementLabel: "Senser's Email",
                        value: values.senderEmail
                    }}
                    onChange = { onChange }
                    key = {1} />

                { collaborators }

            </ul>
            
        </section>
    )

    // return (
    //     <section>
    //         <h5>Step {stepNumber}: Recipient Details</h5>
            
    //         <CollaboratorDetails
    //             name = {{
    //                 elementName: "recipientName",
    //                 elementLabel: "Recipient's Name",
    //                 value: values.recipientName
    //             }}
    //             email = {{
    //                 elementName: "recipientEmail",
    //                 elementLabel: "Recipient's Email",
    //                 value: values.recipientEmail
    //             }}
    //             onChange = { onChange } />

    //         <CollaboratorDetails
    //             name = {{
    //                 elementName: "recipientName",
    //                 elementLabel: "Recipient's Name",
    //                 value: values.recipientName
    //             }}
    //             email = {{
    //                 elementName: "recipientEmail",
    //                 elementLabel: "Recipient's Email",
    //                 value: values.recipientEmail
    //             }}
    //             onChange = { onChange } />

    //         { collaborators }

    //     </section>
    // )
}