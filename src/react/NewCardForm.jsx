import React, { useEffect, useReducer, Children, cloneElement, createContext, useState, useContext } from "react";

import { Paginator, PaginatorContext, BackButton, NextButton } from "./Paginator.jsx";
import SetOccasion from "./SetOccasion.jsx";

const SetSender = () => {
    return (
        <article className="Content">
            <h5>Title</h5>
            <p>Content</p>
        </article>
    )
}

const SetCollaborators = () => {
    return (
        <article className="Content">
            <h5>Add collaborators to this card!</h5>
             
        </article>
    )
}

const JustRender = () => {
    const { currentView } = useContext(PaginatorContext);

    return (
        <>{ currentView.map((item, i) => <div className="Content" key={i}>{ item }</div>) }</>
    )
}

const NewCardForm = ({ children }) => {
    children = [<SetOccasion/>, <SetSender/>];
    return (
        <Paginator data={ children } maxPerPage={ 1 }>
            <JustRender/>
            <BackButton/>
            <NextButton/>
        </Paginator>
    )
}

export default NewCardForm