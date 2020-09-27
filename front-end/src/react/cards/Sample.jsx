import React from "react";

import Classic from "./Classic";

const sampleFormData = {
    message: "This is an example card message for testing purposes.",
    design: "Classic",
    occasion: "Father's day",
    recipient: {
        name: "Darth Vader",
        email: "ani@empire.imp"
    },
    sender: {
        name: "Luke Skywalker",
        email: "luke@rebels.alliance"
    },
    collaborators: [
        {
            name: "Han Solo",
            email: "han@noemail.com",
            message: "This is a short message."
        },
        {
            name: "Leia Skywalker",
            email: "highness@rebels.alliance",
            message: "This is a very very long message to test how well large bodies of text work with the styling. Lorem ipsom, etc etc."
        }
    ],
    sendDate: new Date()
}

const ClassicSample = () => {
    return <Classic {...sampleFormData} />
}

export {
    ClassicSample
}