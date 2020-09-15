import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { StoreContext } from "./FormDataStore";
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
    const { get, set } = useContext(StoreContext);
    const [ text, setText ] = useState(() => get("message"))
    const title = `Step ${currentPage}: What would you like the card to say?`;

    useEffect(() => {
        return () => set("message", text);
    }, [text])

    return (
        <TitledContent>
            <TitleElement>{ title }</TitleElement>
            <Textarea
                name="message"
                id="message"
                notresizable
                value={ text }
                onChange={ ({ target: { value }}) => setText(value) }></Textarea>   
        </TitledContent>
    )
}

export default SetMessage;