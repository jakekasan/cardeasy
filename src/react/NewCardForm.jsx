import React, { useEffect, useReducer, Children, cloneElement, createContext, useState } from "react";

const usePagination = ({ data, maxPerPage }) => {
    console.log(`usePagination - setting maxPage = ${maxPage}`)

    let calcMaxPage = (data, maxPerPage) => Math.ceil(data.length, maxPerPage);

    const [ canGoBack, setCanGoBack ] = useState(true);
    const [ canGoNext, setCanGoNext ] = useState(true);
    const [ maxPage, setMaxPage ] = useState(calcMaxPage(data, maxPerPage));
    const canGoPage = (page) => 0 >= page >= maxPage

    useEffect(() => {
        setMaxPage(calcMaxPage(data, maxPerPage))
    }, [ data, maxPerPage ])

    const reducer = (currentPage, action) => {
        console.log("Reducer in usePagination called");
        console.log(`Current page: ${currentPage}`)
        console.log(action);

        switch (action.type) {
            case "next":
                if (!canGoNext) return currentPage
                let candidatePage =  ++currentPage;
                return (currentPage < maxPage) ? ++currentPage : currentPage
            case "back":
                if (!canGoBack) return currentPage
                let candidatePage = --currentPage;
                return (candidatePage >= 0) ? candidatePage : currentPage
            case "jump":
                if (!canGoPage(action.jump)) return
                return (0 < action.jump < maxPage) ? action.jump : currentPage
            default:
                return currentPage
        }
    }

    const [ currentPage, dispatch ] = useReducer(reducer, 0);

    const goNextPage = () => dispatch({type: "next"})
    const goBackPage = () => dispatch({type: "back"})
    const goJumpPage = (pageNumber) => dispatch({type: "jump", jump: pageNumber})

    return {
        currentPage,
        currentView,
        goNextPage,
        goBackPage,
        goJumpPage,
        canGoNext,
        setCanGoNext,
        canGoBack,
        setCanGoBack,
        canGoPage,
        dataSelection
    }

}

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

const Paginator = ({ data, maxPerPage, className, children } = { maxPerPage: 1, className: "Paginator", data: [] }) => {

    const maxPage = Math.ceil(data.length / maxPerPage);

    //const { currentPage, nextPage, prevPage } = usePagination({ maxPage: maxPage });

    const PaginatorContext = createContext({});

    useEffect(() => {
        console.log(`Current page now ${currentPage}`);
    },[currentPage])

    const sliceFrom = currentPage * maxPerPage;
    const sliceTo = currentPage * maxPerPage + maxPerPage;

    return (
        <PaginatorContext.Provider value={ usePagination({ data, maxPerPAge })}>
            <section className={ className }>
                { cloneElement(children,{ data: data.slice(sliceFrom, sliceTo)}) }
                <button onClick={ prevPage }>Back</button>
                <button onClick={ nextPage }>Next</button>
            </section>
        </PaginatorContext.Provider>
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
    console.log("NewCardForm rendering");
    console.log(children);
    children = [SetOccasion, SetSender]
    return (
        <Paginator data={ children } maxPerPage={ 1 }>
            <JustRender/>
        </Paginator>
    )
}

export default NewCardForm;