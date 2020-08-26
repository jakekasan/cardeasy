import React, { useEffect, useState } from "react";
//import { CardOccasion } from "./CardOccasion.jsx";
import { Page } from "./../../../partials/Page.jsx";

const occasionNames = ["Birthday", "New Child", "Anniversary", "Bar Mitzvah"];

const DEFAULT_OCCASIONS = occasionNames.map((name, i) => {
    return {
        name: name,
        id: i,
        selected: false
    }
})

const DEFAULT_OCCASION = { name: "Unknown Occasion" };

export const CardOccasion = ({ occasion = DEFAULT_OCCASION, occasionOnClick: onClick}) => {

    const selected = (occasion.selected) ? " selected" : "";
    return (
        <li className={`CardOccasion${selected}`} id={ occasion.id } onClick={ () => onClick(occasion.id) }>
            <p>{ occasion.name }</p>
        </li>
    )
}

export const SetCardOccasion = ({
    onChange,
    values,
    stepNumber
}) => {

    const [ occasions, setOccasions ] = useState(DEFAULT_OCCASIONS);

    function occasionOnClick(id) {
        console.log("Clicked on occasion", id);
        console.log("Is string", id instanceof String);

        setOccasions(
            occasions.map(item => {
                item.selected = item.id === id;
                return item
            })
        )
    }

    useEffect(() => {
        console.log("SetCardOccasion starting");
        return () => console.log("SetCardOccasion stopping")
    }, [])

    return (
        <Page
            title = "Choose an occasion for your card"
            stepNumber = { stepNumber }
        >
            <ul className = "CardOccasion">
                { occasions.map((occasion, i) => <CardOccasion key={i} occasion={ occasion } occasionOnClick={ occasionOnClick }/>)}
            </ul>
        </Page>
    )
}