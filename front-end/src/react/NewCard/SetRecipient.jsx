import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormDataStoreContext } from "./FormDataStore";
import { PaginationContext } from "./Pagination";
import { TitleElement, TitledContent } from "./Layout";

const PersonDetails = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 0;
`;

const InputDiv = styled.div`
    display: grid;
    place-items: center;
    padding: 25px;
    position: relative;
`;

const InputElement = styled.input`
    padding: 10px;
    font-size: 1.5rem;
`;

const OffsetLabel = styled.label`
    position: absolute;
    left: 0;
    top: 0;
`;

const Input = ({
    name,
    label,
    onChange,
    value
}) => {
    return (
        <InputDiv>
            <InputElement
                type={ name }
                name={ name }
                onChange={ onChange }
                value={ value }/>
            <OffsetLabel htmlFor={name}>{ label }</OffsetLabel>
        </InputDiv>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
}

const SetRecipient = () => {
    const { get, set } = useContext(FormDataStoreContext);
    const { currentPage } = useContext(PaginationContext);
    
    const [recipient, setRecipient] = useState(() => {
        let existing = get("recipient");
        if (existing === undefined) {
            return {name:"", email:""}
        } else {
            return existing
        }
    })

    const onInputChange = (event) => {
        const { target: { name, value }} = event;
        set("recipient", recipient);
        setRecipient(existing => {
            return {...existing, [name]: value}
        })
    }

    const title = `Step ${currentPage + 1}: Who are you sending the card to?`;

    return (
        <TitledContent>
            <TitleElement>{ title }</TitleElement>
            <PersonDetails>
                <Input type="text" name="name" onChange={ onInputChange } label="Recipient's name:" value={ recipient.name }/>
                <Input type="text" name="email" onChange={ onInputChange } label="Recipient email:" value={ recipient.email }/>
            </PersonDetails>
        </TitledContent>
    )
}

export default SetRecipient;