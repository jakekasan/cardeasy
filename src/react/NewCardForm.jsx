import React, { useEffect, useReducer, Children, cloneElement, createContext, useState } from "react";



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


const Occasion = ({ name }) => <li className="Occasion">{ name }</li>

const OccasionList = ({ data }) => {
    return (
        <ul className="OccasionList">
            { data.map(occasion => <Occasion {...occasion} />)}
        </ul>
    )
}

const SetOccasion = () => {

    const [ occasions, setOccasions ] = useState([]);

    useEffect(() => {
        let timeOut = setTimeout(() => setOccasions(DEFAULT_OCCASIONS), 3000)
        return () => clearTimeout(timeOut);
    }, []);

    return (
        <Paginator data ={ occasions } maxPerPage={ 10 }>
            <OccasionList />
        </Paginator>
    )
}

const SetSender = () => {
    return (
        <>
            <h5>Title</h5>
            <p>Content</p>
        </>
    )
}

const JustRender = ({data}) => {
    return (
        <div>{ data }</div>
    )
}

const NewCardForm = ({ children }) => {
    console.log("NewCardForm rendering, children:");
    console.log(children);
    children = [SetOccasion, SetSender]
    return (
        <Paginator data={ children } maxPerPage={ 1 }>
            <JustRender/>
        </Paginator>
    )
}

export default NewCardForm;