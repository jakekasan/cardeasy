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

const occasionNames = ["Birthday", "New Child", "Anniversary", "Bar Mitzvah", "Funeral", "Wedding", "High School Graduation", "University Graduation", "Becoming a Grandparent", "Bereavement", "New Star Wars Movie", "Won Lottery"];

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


const Occasion = ({ name }) => <li className="Occasion">{ name }</li>

const OccasionList = () => {
    const { currentView } = useContext(PaginatorContext);
    return (
        <article className="Content">
            <h5>Select from these occasions!</h5>
            <ul className="OccasionList">
                { currentView.map(occasion => <Occasion key={occasion.id} {...occasion} />)}
            </ul>
        </article>
    )
}

const SetOccasion = () => {

    const [ occasions, setOccasions ] = useState([]);
    const { setCanGoNext } = useContext(PaginatorContext);
    

    useEffect(() => {
        console.log("Setting canGoNext to false");
        setCanGoNext(() => false);
        console.log("canGoNext set to false")
        let timeOuts = [
            setTimeout(() => setOccasions(DEFAULT_OCCASIONS), 3000),
            setTimeout(() => setCanGoNext(true), 5000)
        ];
        
        
        return () => timeOuts.forEach(clearTimeout);
    }, []);

    return (
        <Paginator data ={ occasions } maxPerPage={ 10 }>
            <OccasionList />
            <BackButton />
            <NextButton />
        </Paginator>
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

const JustRender = () => {
    const { currentView } = useContext(PaginatorContext);
    console.log("JustRender - currentView:");
    console.log(currentView);
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

export default NewCardForm;