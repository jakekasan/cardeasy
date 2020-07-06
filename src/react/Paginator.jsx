import React, { useState, useEffect, useReducer, createContext, useContext } from "react";

const usePagination = ({ data, maxPerPage }) => {
    console.log(`usePagination - maxPerPage = ${maxPerPage}`)

    let calcMaxPage = (data, maxPerPage) => (data && data.length && data.length > 0) ? Math.ceil(data.length / maxPerPage) - 1 : 0;

    console.log(`data.length = ${data.length}, data.length / maxPerPage should be ${data.length / maxPerPage}`)
    const [ maxPage, setMaxPage ] = useState(calcMaxPage(data, maxPerPage));
    const [ canGoBack, setCanGoBack ] = useState(false);
    const [ canGoNext, setCanGoNext ] = useState(false);
    const canGoPage = (page) => 0 >= page >= maxPage

    const reducer = (currentPage, action) => {
        console.log("Reducer in usePagination called");
        console.log(`Current page: ${currentPage}, maxPage: ${maxPage}`);
        console.log(action);
        let candidatePage;

        switch (action.type) {
            case "next":
                if (!canGoNext) return currentPage
                candidatePage = currentPage + 1;
                return (candidatePage <= maxPage) ? candidatePage : currentPage
            case "back":
                if (!canGoBack) return currentPage
                candidatePage = currentPage - 1;
                return (candidatePage >= 0) ? candidatePage : currentPage
            case "jump":
                return (!canGoPage(action.jump)) ? action.jump : currentPage
            default:
                return currentPage
        }
    }

    const [ currentPage, dispatch ] = useReducer(reducer, 0);

    useEffect(() => {
        setCanGoNext(currentPage < maxPage);
        setCanGoBack(currentPage > 0);

        return () => {
            setCanGoNext(false);
            setCanGoBack(false);
        }
    })

    useEffect(() => {
        setMaxPage(calcMaxPage(data, maxPerPage))
        setCanGoNext(currentPage < maxPage);
        setCanGoBack(currentPage > 0);
    }, [ data, maxPerPage ])

    useEffect(() => {
        console.log(`Current page now ${currentPage}`);
        setCanGoNext(currentPage < maxPage);
        setCanGoBack(currentPage > 0);
    }, [currentPage])


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

    return <button className="BackButton" onClick={ goBackPage } { ...(canGoBack) ? null : { disabled: true }}>Back</button>
}

const NextButton = () => {
    const { goNextPage, canGoNext } = useContext(PaginatorContext);

    return <button className="NextButton" onClick={ goNextPage } { ...(canGoNext) ? null : { disabled: true }}>Next</button>
}

const BackBlade = () => {
    const { goBackPage, canGoBack } = useContext(PaginatorContext);

    return <button className="BackBlade" onClick={ goBackPage } { ...(canGoBack) ? null : { disabled: true }}>Back</button>
}

const NextBlade = () => {
    const { goNextPage, canGoNext } = useContext(PaginatorContext);

    return <button className="NextBlade" onClick={ goNextPage } { ...(canGoNext) ? null : { disabled: true }}>Next</button>
}


const Paginator = ({ data, maxPerPage, className, children } = { maxPerPage: 1, className: "Paginator", data: [] }) => {

    return (
        <>
            <PaginatorContext.Provider value={ usePagination({ data, maxPerPage })}>
                { children }
            </PaginatorContext.Provider>
        </>
    )
    return (
        <section className="Paginator">
            <PaginatorContext.Provider value={ usePagination({ data, maxPerPage })}>
                { children }
            </PaginatorContext.Provider>
        </section>
    )
}

export {
    Paginator,
    PaginatorContext,
    BackButton,
    NextButton
}