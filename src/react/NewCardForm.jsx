import React, { useEffect, useReducer, Children, cloneElement } from "react";


const usePagination = ({ maxPage }) => {
    console.log(`usePagination - setting maxPage = ${maxPage}`)
    const reducer = (currentPage, action) => {
        console.log("Reducer in usePagination called");
        console.log(`Current page: ${currentPage}`)
        console.log(action);

        switch (action.type) {
            case "next":
                return (currentPage < maxPage) ? ++currentPage : currentPage
            case "back":
                return (currentPage > 0) ? --currentPage : currentPage
            case "jump":
                return (0 < action.jump < maxPage) ? action.jump : currentPage
            default:
                return currentPage
        }
    }

    const [ currentPage, dispatch ] = useReducer(reducer, 0);

    const nextPage = () => dispatch({type: "next"})
    const prevPage = () => dispatch({type: "back"})
    const gotoPage = (pageNumber) => dispatch({type: "jump", jump: pageNumber})

    return {
        currentPage,
        nextPage,
        prevPage,
        gotoPage
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

    console.log("Paginator started");
    console.log(data);
    console.log(data.length);
    console.log(maxPerPage);
    console.log(`${data.length} / ${maxPerPage} = ${data.length / maxPerPage}`)

    const maxPage = Math.ceil(data.length / maxPerPage);

    const { currentPage, nextPage, prevPage } = usePagination({ maxPage: maxPage });

    useEffect(() => {
        console.log(`Current page now ${currentPage}`);
    },[currentPage])

    const sliceFrom = currentPage * maxPerPage;
    const sliceTo = currentPage * maxPerPage + maxPerPage;

    return (
        <section className={ className }>
            { cloneElement(children,{ data: data.slice(sliceFrom, sliceTo)}) }
            <button onClick={ prevPage }>Back</button>
            <button onClick={ nextPage }>Next</button>
        </section>
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