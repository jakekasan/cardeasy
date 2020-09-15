import React, { useContext } from "react";
import styled from "styled-components";

import { TitleElement, TitledContent } from "./Layout";
import { PaginationContext } from "./Pagination";

const Textarea = styled.textarea`
    resize: false;
    padding: 20px;
    height: 50vh;
    margin: 10px 100px;
    font-size: 1.5rem;
`;

const SetMessage = () => {
    const { currentPage } = useContext(PaginationContext);
    const title = `Step ${currentPage}: What would you like the card to say?`;
    return (
        <TitledContent>
            <TitleElement>{ title }</TitleElement>
            <Textarea name="message" id="message" notresizable></Textarea>   
        </TitledContent>
    )
}

export default SetMessage;