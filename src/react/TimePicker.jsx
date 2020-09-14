import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "./FormDataStore";

const TimeContainer = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    place-items: center;
    margin: 50px;
`;

const TimeInputContainer = styled.div`
    background-color: ${props => props.theme.colors.dark.tertiary};
    padding: 5px;
`;

const TimeInput = styled.input`
    padding: 5px;
    width: 50px;
`;

const TimePicker = () => {

    const { get, set } = useContext(StoreContext);
    const chosenDatetime = get("sendDatetime") || new Date();

    const [minutes, setMinutes] = useState(chosenDatetime.getMinutes());
    const [hours, setHours] = useState(chosenDatetime.getHours());

    const hourOnChange = (event) => {
        const { target: { value }} = event;

        setHours(currentHours => {
            if (isNaN(value) || value.length > 2 || parseInt(value) > 23 || parseInt(value) < 0) {
                return currentHours
            } else {
                return value
            }
        })
    }

    const minuteOnChange = (event) => {
        const { target: { value }} = event;

        setMinutes(currentMinutes => {
            if (isNaN(value) || value.length > 2 || parseInt(value) > 59 || parseInt(value) < 0) {
                return currentMinutes
            } else {
                return value
            }
        })
    }

    return (
        <TimeContainer>
            <TimeInputContainer>
                <TimeInput
                    type="text"
                    name="hour"
                    id="hour"
                    value={ hours }
                    onChange={ hourOnChange }/>
                :
                <TimeInput
                    type="text"
                    name="minute"
                    id="minute"
                    value={ minutes }
                    onChange={ minuteOnChange }/>
            </TimeInputContainer>
        </TimeContainer>
    )
}

export default TimePicker;