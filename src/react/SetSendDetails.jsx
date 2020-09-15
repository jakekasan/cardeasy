import React, { useContext } from "react";
import styled from "styled-components";

import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { TitleElement, TitledContent } from "./Layout";
import { PaginationContext } from "./Pagination";

const DateTimePickers = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const SetSendDetails = () => {
    const { currentPage } = useContext(PaginationContext);
    const title = `Step ${currentPage}: When would you like the card delivered?`;
    return (
        <TitledContent>
            <TitleElement>{ title }</TitleElement>
            <DateTimePickers>
                <DatePicker />
                <TimePicker />
            </DateTimePickers>
        </TitledContent>
    )
}

export default SetSendDetails;