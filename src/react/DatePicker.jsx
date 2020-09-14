import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { StoreContext } from "./FormDataStore";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const addDays = (date, days) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate
}

const matchMonth = (year, month) => {
    let d = new Date(year, month, 1);
    let padding = d.getDay();
    padding = (padding === 0) ? 7 : padding;
    return Array(padding).fill(null)
            .map((_, i, arr) => addDays(d, - (arr.length - i)))
            .concat(Array(42 - padding)
                        .fill(null)
                        .map((_, i) => addDays(d, i)));
}

const dateString = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;

    day = (day < 10) ? ` ${day}` : `${day}`;
    month = (month < 10) ? `${month}` : `${month} `;

    return `${day}.${month}`
}

const matchDates = (a, b) => {
    if (a === null || b === null) {
        return false
    }
    return (
        a.getFullYear() === b.getFullYear() &
        a.getMonth() === b.getMonth() &
        a.getDate() === b.getDate()
    )
}

const Button = styled.button`
    border: 1px solid ${props => props.theme.colors.dark.primary};
    background-color: ${props => props.theme.colors.dark.primary};
    color: ${props => props.theme.colors.dark.secondary};
    padding: 10px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.theme.colors.dark.secondary};
        color: ${props => props.theme.colors.dark.primary};
        transition: 0.2s;
    }

    flex: 1 1 0;
`;

const Strong = styled.strong`
    flex: 3 0 0;
    display: grid;
    place-items: center;
`;

const SliderContainer = styled.div`
    width: 100%;
    /* display: flex;
    flex-direction: row; */
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
    padding: 5px;
    background-color: ${props => props.theme.colors.dark.tertiary};
`;

const MonthYearSlider = ({
    getInitialValue,
    storeFinalValue
}) => {
    const [date, setDate] = useState(() => getInitialValue());
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const nextMonth = () => {
        console.log("Incrementing month:", {date});
        setDate(dt => {
            let newDt = new Date(dt);
            newDt.setMonth(newDt.getMonth() + 1);
            return newDt
        })
    }

    const previousMonth = () => {
        console.log("Decrementing month:", {date});
        setDate(dt => {
            let newDt = new Date(dt);
            newDt.setMonth(newDt.getMonth() - 1);
            return newDt
        })
    }

    const nextYear = () => {
        setDate(dt => {
            let newDt = new Date(dt);
            newDt.setYear(newDt.getFullYear() + 1);
            return newDt
        })
    }

    const previousYear = () => {
        setDate(dt => {
            let newDt = new Date(dt);
            newDt.setYear(newDt.getFullYear() - 1);
            return newDt
        })
    }

    useEffect(() => {
        storeFinalValue(date);
    }, [date])

    return (
        <SliderContainer>
            <Button onClick={previousYear}>|&lt;</Button>
            <Button onClick={previousMonth}>&lt;</Button>
            <Strong>{ `${months[date.getMonth()]} ${date.getFullYear()}` }</Strong>
            <Button onClick={nextMonth}>&gt;</Button>
            <Button onClick={nextYear}>&gt;|</Button>
        </SliderContainer>
    )
}

const CalendarContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 30px;
    grid-gap: 5px;
    padding: 5px;
    background-color: ${props => props.theme.colors.dark.tertiary};
`;

const CalendarDate = styled.div`
    background-color: white;
    transition: 0.2s;
    font-size: 0.6rem;
    display: grid;
    place-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.dark.hover};
    }
`;

const CurrentDate = styled(CalendarDate)`
    color: black;
    font-weight: 800;
`;

const NotCurrentDate = styled(CalendarDate)`
    color: grey;
`;

const SelectedDate = styled(CalendarDate)`
    background-color: ${props => props.theme.colors.dark.selected};
`;

const DatePickerContainer = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
`;

const Calendar = ({ currentMonth, dates, selectedDate, setSelectedDate }) => {

    const handleSelect = (d) => {
        console.log("Date selected:", {d})
        setSelectedDate(d);
    }
    return (
        <CalendarContainer>
            {
                dates.map(d => {
                    let El = (d.getMonth() === currentMonth)
                        ? CurrentDate
                        : NotCurrentDate

                    El = matchDates(d, selectedDate)
                        ? SelectedDate
                        : El;

                    return (
                        <El
                            onClick={ () => handleSelect(d)}
                            key={ d }
                        >{ dateString(d) }</El>
                    )
                })
            }
        </CalendarContainer>
    )
}

const DatePicker = () => {

    const { get, set } = useContext(StoreContext);
    let today = get("sendDatetime") || new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const [dates, setDates] = useState(() => matchMonth(year, month));
    const [selectedDate, setSelectedDate] = useState(null);
    
    useEffect(() => {
        console.log("year,month useEffect", {selectedDate});
        setDates(matchMonth(year, month));
    }, [year, month])

    useEffect(() => {
        console.log("selectedDate useEffect",{selectedDate});
        return () => console.log("Result:", {selectedDate})
    }, [selectedDate])

    const handleMonthChange = (event) => {
        const { target: { value: monthValue } } = event;

        switch (true) {
            case monthValue < 1:
                setMonth(11);
                setYear(current => current - 1);
                return

            case monthValue > 12:
                setMonth(0);
                setYear(current => current + 1);
                return

            default:
                setMonth(monthValue - 1);
        }
    }

    console.log("Selected:", dates.filter(d => d === selectedDate), {selectedDate})

    return (
        <DatePickerContainer>
            <MonthYearSlider
                getInitialValue={ () => new Date(year, month, 1) }
                storeFinalValue={ (value) => {
                    setMonth(value.getMonth());
                    setYear(value.getFullYear())
                }} />
            <Calendar
                currentMonth={ month }
                dates={ dates }
                selectedDate={ selectedDate }
                setSelectedDate={ setSelectedDate } />
        </DatePickerContainer>
    )
}

export default DatePicker;