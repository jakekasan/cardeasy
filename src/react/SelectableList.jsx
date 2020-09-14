import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";

import {
    TitleElement,
    TitledContent
} from "./Layout";

const SelectableListElement = styled.ul`
    list-style: none;
    padding: 25px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const UnSelectedItem = styled.li`
    background-color: ${props => props.theme.colors.dark.tertiary};
    color: ${props => props.theme.colors.dark.secondary};
    padding: 25px;
    margin: 15px;
    transition: 0.2s;
    border-radius: 25px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    transition: 0.2s;

    &:hover {
        transition: 0.2s;
        background-color: ${props => props.theme.colors.dark.hover}
    }
`;

const SelectedItem = styled(UnSelectedItem)`
    background-color: ${props => props.theme.colors.dark.selected};

    &:hover {
        transition: 0.2s;
        background-color: ${props => props.theme.colors.dark.selected};
    }
`;

const SelectableItem = ({ selected, text, ...props}) => {

    const Container = (selected)
                        ? SelectedItem
                        : UnSelectedItem;

    return <Container {...props}>{ text }</Container>
}

const SelectableList = ({
    initialValueGetter = () => console.log("Example initialValueGetter, returning nothing"),
    finalValueSetter = (finalValue) => console.log("finalValueSetter:", { finalValue }),
    options = ["Option A", "Option B", "Option C", "Option D"].map((item, i) => Object.create({ id: i, text: item})),
    finalStep = () => console.log("SelectableList finished"),
    title = "Untitled sample SelectableList"
} = {}) => {
    const [selection, setSelection] = useState(() => initialValueGetter());

    useEffect(() => {
        return () => finalValueSetter(selection);
    }, [selection])

    const handleSelect = (newSelection) => {
        if (newSelection === selection) {
            finalStep();
        }
        setSelection(newSelection)
    }

    return (
        <TitledContent>
            <TitleElement>{ title }</TitleElement>
            <SelectableListElement>
                {
                    options.map(item => {
                        return <SelectableItem
                                    key={ item.id }
                                    text={ item.text }
                                    selected={ item.id === selection}
                                    onClick={ () => handleSelect(item.id) }/>
                    })
                }
            </SelectableListElement>
        </TitledContent>
    )
}


export default SelectableList;