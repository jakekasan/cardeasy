import React, { useEffect, useReducer, Children, cloneElement, createContext, useState, useContext } from "react";

import { Paginator, PaginatorContext, BackButton, NextButton } from "./Paginator.jsx";
import { Content } from "./Layout.jsx";
import SetOccasion from "./SetOccasion.jsx";
import SetDesign from "./SetDesign.jsx";

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
    const currentChild = Children.only(currentView[0]);

    return <>{ currentChild }</>
}

const NewCardForm = ({ children }) => {
    children = [<SetOccasion/>, <SetDesign/>, <SetSender/>];
    return (
        <Paginator data={ children } maxPerPage={ 1 }>
            <JustRender/>
            <BackButton/>
            <NextButton/>
        </Paginator>
    )
}


const FormStep = () => {
    return (
        <div>
            <FormStepTitle />
            <FormStepContent />
        </div>
    )
}

const Form = () => {
    return (
        <>
        </>
    )
}

export default NewCardForm