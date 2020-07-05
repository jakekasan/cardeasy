import React, { useEffect, useReducer, Children, cloneElement, createContext, useState, useContext } from "react";

import { Paginator, PaginatorContext, BackButton, NextButton } from "./Paginator.jsx";

const MultiPartForm = ({ children }) => {
    const [ isFormChildValid, setIsFormChildValid ] = useState(false);

    const { currentPage, nextPage, prevPage } = usePagination({ maxPage: children.length - 1});

    return (
        <section className="MultiPartForm">
            <article>
                { React.cloneElement( children[state.currentPage], { pageNumber: currentPage + 1, setIsValid: setFromChildValid })}
            </article>
            <button className={ "BackButton" } onClick={ nextPage }>Back</button>
            <button className={ "NextButton" } onClick={ prevPage }>{ (currentPage < children.length - 1) ? "Next" : "Submit" }</button>
        </section>
    )
}


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
    console.log("NewCardForm rendering, children:");
    children = [<SetOccasion/>, <SetSender/>];
    console.log(children);
    return (
        <Paginator data={ children } maxPerPage={ 1 }>
            <JustRender/>
            <BackButton/>
            <NextButton/>
        </Paginator>
    )
}

export default NewCardForm