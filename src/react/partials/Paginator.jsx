import React, { useState, useReducer, useEffect } from "react";

const Button = ({ children }) => {
    return <button className = "buttonStyle">{ children }</button>
}

const ItemList = (props) => {
    return <ul>
        { items.map(item => <li>{ item }</li>)}
    </ul>
}

const Loading = () => {
    return <h3>Loading...</h3>
}

const PaginatorContent = ({ data, currentPage, maxPerPage }) => {
    if (data.length > 0) {
        const startIndex = (currentPage - 1) * maxPerPage;
        const endIndex = (currentPage) * maxPerPage;
        const currentData = data.slice(startIndex, endIndex);

        return <ul>
            { currentData.map(item => <li>{ item }</li>)}
        </ul>
    } else {
        return <Loading />
    }
}


DEFAULT_DATA = [
    "Birthday",
    "New Child",
    "Anniversay",
    "Bar Mitzvah"
].map(item => Object.fromEntries(["name", item]));

const delayedGet = (setter) => setTimeout(setter(DEFAULT_DATA), 2000);

export const Paginator = ({ getData = delayedGet, ...props }) => {

    const [ items, setItems ] = useState([]);

    const reducer = (action, state) => {
        switch (action.type) {
            case "back":
                return {
                    ...state,
                    currentPage: Math.max(state.currentPage, 0)
                }
            case "next":
                return {
                    ...state,
                    currentPage: Math.min(state.currentPage, items.length - 1)
                }
        }
    }

    const [ state, dispatch ] = useReducer(reducer, {
        currentPage: 0
    })

    useEffect(() => {
        getData(setItems);
    }, []);    

    return (
        <div className="Paginator">
            <PaginatorContent data = {items} currentPage = { state.currentPage } maxPerPage = {10}/>
            <Button onClick = { dispatch({type: "back"}) }>Back</Button>
            <Button onClick = { dispatch({type: "next"}) }>Next</Button>
        </div>
    )
}