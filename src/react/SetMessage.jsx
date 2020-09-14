import React from "react";
import styled from "styled-components";

import { TitleElement, TitledContent } from "./Layout";

const Textarea = styled.textarea`
    resize: false;
    padding: 10px;
`;

const SetMessage = () => {
    return (
        <TitledContent>
            <TitleElement>Enter a message:</TitleElement>
            <Textarea name="message" id="message" cols="30" rows="10" notresizable></Textarea>   
        </TitledContent>
    )
}

export default SetMessage;