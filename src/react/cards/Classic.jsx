import React from "react";
import styled from "styled-components";

const Card = styled.section`
    border: 1px solid black;
    box-shadow: 4px 2px;
    border-radius: 25px;
    display: grid;
    background-color: white;
    padding: 25px;
`;

const Message = styled.p`
    padding: 10px;
`;

const CollaboratorContainer = styled.li`
    flex: 1 0 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    border: 0.5px solid grey;
    margin: 10px;
`;

const CollaboratorMessage = styled.p`
    font-size: 1rem;
    flex: 1 1 0;
    padding: 10px;
    margin: 0;
`;

const CollaboratorName = styled.h5`
    flex: 0 2 0;
    margin: 0;
    font-size: 0.75rem;
    text-align: right;
`;

const GreetingElement = styled.h3`
    margin: 0;
    padding: 0;
`;

const Signed = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Greeting = ({recipient}) => {
    return (
        <GreetingElement>
            { `Dear ${recipient && recipient.name || "Unknown Person"},` }
        </GreetingElement>
    )
}

const Collaborator = ({name, message = "No message."} = {}) => {
    console.log("Collaborator", { name, message})
    return (
        <CollaboratorContainer>
            <CollaboratorMessage>{ `"${message}"` }</CollaboratorMessage>
            <CollaboratorName>{ `- ${name}` }</CollaboratorName>
        </CollaboratorContainer>
    )
}

const Classic = ({
    collaborators,
    message,
    occasion,
    sender,
    recipient
}) => {
    console.log("collaborators", { collaborators })
    return (
        <Card>
            <Greeting recipient={ recipient } />
            <Message>{ `These people wanted to wish you a happy ${occasion}` }</Message>
            <Signed>
                { [{...sender, message: message }]
                    .concat(collaborators).map((collab, i) => {
                    return (
                        <Collaborator {...collab} key={ i } />
                    )
                })}
            </Signed>
        </Card>
        )
}

export default Classic;