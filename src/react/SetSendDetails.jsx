import React from "react";
import styled from "styled-components";

import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import { TitleElement, TitledContent } from "./Layout";

const DateTimePickers = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const SetSendDetails = () => {
    return (
        <TitledContent>
            <TitleElement>Set the date and time you want the card to be sent:</TitleElement>
            <DateTimePickers>
                <DatePicker />
                <TimePicker />
            </DateTimePickers>
        </TitledContent>
    )
}

export default SetSendDetails;