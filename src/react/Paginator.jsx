import React, { useState, useEffect, useReducer, createContext, useContext } from "react";

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
        let candidatePage;

        switch (action.type) {
            case "next":
                if (!canGoNext) return currentPage
                candidatePage =  ++currentPage;
                return (currentPage < maxPage) ? ++currentPage : currentPage
            case "back":
                if (!canGoBack) return currentPage
                candidatePage = --currentPage;
                return (candidatePage >= 0) ? candidatePage : currentPage
            case "jump":
                if (!canGoPage(action.jump)) return
                return (0 < action.jump < maxPage) ? action.jump : currentPage
            default:
                return currentPage
        }
    }

    const [ currentPage, dispatch ] = useReducer(reducer, 0);

    useEffect(() => {
        console.log(`Current page now ${currentPage}`);
    },[currentPage])


    const goNextPage = () => dispatch({type: "next"})
    const goBackPage = () => dispatch({type: "back"})
    const goJumpPage = (pageNumber) => dispatch({type: "jump", jump: pageNumber})
    const sliceFrom = currentPage * maxPerPage;
    const sliceTo = sliceFrom + maxPerPage;
    const currentView = data.slice(sliceFrom, sliceTo);

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
        canGoPage
    }
}

const PaginatorContext = createContext({});

const BackButton = () => {
    const { goBackPage, canGoBack } = useContext(PaginatorContext);

    return <button onClick={ goBackPage } disabled={ canGoBack }>Back</button>
}

const NextButton = () => {
    const { goNextPage, canGoNext } = useContext(PaginatorContext);

    return <button onClick={ goNextPage } disabled={ canGoNext }>Next</button>
}

const Paginator = ({ data, maxPerPage, className, children } = { maxPerPage: 1, className: "Paginator", data: [] }) => {

    return (
        <section className={ className }>
            <PaginatorContext.Provider value={ usePagination({ data, maxPerPage })}>
                { children }
            </PaginatorContext.Provider>
        </section>
    )
}
